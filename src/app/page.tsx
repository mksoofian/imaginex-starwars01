"use client";

import { FilmsCard } from "@/components/filmCard";
import { PersonCard } from "@/components/personCard";
import { PlanetCard } from "@/components/planetCard";
import { SpeciesCard } from "@/components/speciesCard";
import { StarshipCard } from "@/components/starshipCard";
import { VehicleCard } from "@/components/vehicleCard";
import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Page() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<ResponseInfo | null>(null);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(query);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  useEffect(() => {
    if (category) {
      setIsLoading(true);

      fetch(
        `https://swapi.dev/api/${category.toLowerCase()}/?search=${debounced}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          setIsLoading(false);
        }); //add error handling
    }
  }, [category, page, debounced]);

  function handleSearch(term: string) {
    setQuery(term);
    setPage(1); // Reset page to 1 to avoid error if
  }

  function handleCategorySelection(category: string) {
    setCategory(category);
    setPage(1); // Reset page to 1
  }

  return (
    <Container maxWidth="1440px" marginX="auto">
      {/* SEARCH SECTION WITH QUERY FORM */}
      <Box as="section" id="section1" width="100%">
        <Box
          bg="white"
          borderRadius="15px"
          paddingY="5vh"
          maxWidth="500px"
          marginX="auto"
        >
          <Flex gap={4} align="stretch" padding={5} flexWrap="wrap">
            {/* DropDown Menu: Category Selection*/}
            <FormControl>
              <FormLabel>Categories</FormLabel>
              <Select
                placeholder="Select Category"
                onChange={(e) => {
                  handleCategorySelection(e.target.value);
                }}
              >
                <option value="films">Films</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="species">Species</option>
                <option value="vehicles">Vehicles</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Search Database</FormLabel>
              <Input
                type="text"
                value={query}
                disabled={category === "" ? true : false}
                placeholder={
                  category === ""
                    ? "You must select a category to search"
                    : "Search by name"
                }
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
            </FormControl>
          </Flex>
        </Box>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            {data && category !== ""
              ? `${data.count} Total Results`
              : "Results"}
          </AbsoluteCenter>
        </Box>
      </Box>

      {/* RESULTS SECTION  */}
      <Box as="section" id="section2" width="90%" marginX="auto">
        <SimpleGrid minChildWidth="350px" spacing="40px">
          {isLoading ? (
            //Switch this to an animation... shouldnt be using a button...
            <Button
              isLoading
              loadingText="Loading"
              colorScheme="teal"
              variant="ghost"
              spinnerPlacement="start"
            >
              Loading
            </Button>
          ) : (
            data?.results?.map((categories: Categories, index) => {
              //   ------------------ How can we refactor this? ------------------
              // How to render  items which are an array without another fetch?
              switch (category) {
                case "films":
                  return (
                    <FilmsCard
                      key={`${category}+${index}`}
                      category={categories as Films}
                    />
                  );
                case "people":
                  return (
                    <PersonCard
                      key={`${category}+${index}`}
                      category={categories as People}
                    />
                  );
                case "planets":
                  return (
                    <PlanetCard
                      key={`${categories}+${index}`}
                      category={categories as Planets}
                    />
                  );
                case "species":
                  return (
                    <SpeciesCard
                      key={`${categories}+${index}`}
                      category={categories as Species}
                    />
                  );
                case "starships":
                  return (
                    <StarshipCard
                      key={`${categories}+${index}`}
                      category={categories as Starships}
                    />
                  );
                case "vehicles":
                  return (
                    <VehicleCard
                      key={`${categories}+${index}`}
                      category={categories as Vehicles}
                    />
                  );
                default:
                  console.log(`Sorry, no results.`);
              }
            })
          )}
        </SimpleGrid>

        {/* Pagination Buttons */}
        <Flex css={{ margin: "25px" }} justifyContent="center" gap="20px">
          {data?.previous !== null && category !== "" && (
            <Button
              onClick={() => setPage(page - 1)}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
              value="prev"
            >
              Previous Page
            </Button>
          )}
          {data?.next !== null && category !== "" && (
            <Button
              onClick={() => setPage(page + 1)}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
              value="next"
            >
              Next Page
            </Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
