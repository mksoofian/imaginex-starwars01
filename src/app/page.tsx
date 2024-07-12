"use client";

import {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  background,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Page() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<ResponseInfo | null>(null);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<Categories[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (category && query) {
      fetch(`https://swapi.dev/api/${category.toLowerCase()}/?search=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          //   ------------------ How can we refactor this? ------------------
          if (category == "films") {
            setResults(data.results as Films[]);
          } else if (category == "people") {
            setResults(data.results as People[]);
          } else if (category == "planets") {
            setResults(data.results as Planets[]);
          } else if (category == "species") {
            setResults(data.results as Species[]);
          } else if (category == "starships") {
            setResults(data.results as Starships[]);
          } else if (category == "vehicles") {
            setResults(data.results as Vehicles[]);
          }
        });
      setIsLoading(false);
    } else if (category) {
      fetch(`https://swapi.dev/api/${category.toLowerCase()}/?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          if (category == "films") {
            setResults(data.results as Films[]);
          } else if (category == "people") {
            setResults(data.results as People[]);
          } else if (category == "planets") {
            setResults(data.results as Planets[]);
          } else if (category == "species") {
            setResults(data.results as Species[]);
          } else if (category == "starships") {
            setResults(data.results as Starships[]);
          } else if (category == "vehicles") {
            setResults(data.results as Vehicles[]);
          }
        });
      setIsLoading(false);
    }
  }, [category, page, query]);

  const handlePageChange = (value: string) => {
    setIsLoading(true);
    const toPage =
      value === "next"
        ? data?.next.slice(data?.next.length - 1)
        : data?.previous.slice(data?.previous.length - 1);
    if (toPage === "/") {
      setPage(1);
    } else {
      const pageNumber = parseInt(toPage as string);
      setPage(pageNumber);
    }
  };
  function handleSearch(term: string) {
    setQuery(term);
  }

  function handleCategorySelection(category: string) {
    setCategory(category);
    setPage(1); // Reset page to 1
    setIsLoading(true);
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
            results?.map((categories: Categories, index) => {
              //   ------------------ How can we refactor this? ------------------
              // Make special Card components for each category
              // How to render  items which are an array without another fetch?
              if (category == "films") {
                const {
                  title,
                  episode_id,
                  opening_crawl,
                  director,
                  producer,
                  release_date,
                } = categories as Films;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{title}</Heading>
                      <Text pt="2" fontSize="sm">
                        Episode: {episode_id}
                      </Text>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Director</Text> {director}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Producer</Text> {producer}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Release Date:</Text>
                          {release_date}
                        </ListItem>
                      </List>

                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                Opening Crawl
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            {opening_crawl}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </CardBody>
                  </Card>
                );
              } else if (category == "people") {
                const {
                  name,
                  birth_year,
                  eye_color,
                  gender,
                  hair_color,
                  height,
                  mass,
                  skin_color,
                  homeworld,
                } = categories as People;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Birth Year</Text>{" "}
                          {birth_year}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Eye Color</Text> {eye_color}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Gender</Text>
                          {gender}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Hair Color</Text>
                          {hair_color}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Height</Text>
                          {height}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Mass</Text>
                          {mass}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Skin Color</Text>
                          {skin_color}
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                );
              } else if (category == "planets") {
                const {
                  name,
                  diameter,
                  rotation_period,
                  orbital_period,
                  gravity,
                  population,
                  climate,
                  terrain,
                  surface_water,
                } = categories as Planets;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Diameter</Text> {diameter}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Rotation Period</Text>{" "}
                          {rotation_period}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Orbital Period</Text>
                          {orbital_period}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold">Gravity</Text>
                          {gravity}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Population</Text>
                          {population}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Climate</Text>
                          {climate}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Terrain</Text>
                          {terrain}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Surface Water</Text>
                          {surface_water}
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                );
              } else if (category == "species") {
                const {
                  name,
                  classification,
                  designation,
                  average_height,
                  average_lifespan,
                  eye_colors,
                  hair_colors,
                  skin_colors,
                  language,
                } = categories as Species;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Classification</Text>{" "}
                          {classification}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Designation</Text>{" "}
                          {designation}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Average Height</Text>
                          {average_height}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold">Average Life Span</Text>
                          {average_lifespan}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Eye Colors</Text>
                          {eye_colors}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Hair Colors</Text>
                          {hair_colors}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Skin Colors</Text>
                          {skin_colors}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Language</Text>
                          {language}
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                );
              } else if (category == "starships") {
                const {
                  name,
                  model,
                  starship_class,
                  manufacturer,
                  cost_in_credits,
                  length,
                  crew,
                  passengers,
                  max_atmosphering_speed,
                  hyperdrive_rating,
                  MGLT,
                  cargo_capacity,
                  consumables,
                } = categories as Starships;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Model</Text> {model}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Starship Class</Text>{" "}
                          {starship_class}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Manufacturer</Text>
                          {manufacturer}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold">Cost in Credits</Text>
                          {cost_in_credits}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Length</Text>
                          {length}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Crew</Text>
                          {crew}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Passengers</Text>
                          {passengers}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Max Atmosphering Speed</Text>
                          {max_atmosphering_speed}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> HyperDrive Rating</Text>
                          {hyperdrive_rating}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> MGLT</Text>
                          {MGLT}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Cargo Capacity</Text>
                          {cargo_capacity}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Consumables</Text>
                          {consumables}
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                );
              } else if (category == "vehicles") {
                const {
                  name,
                  model,
                  vehicle_class,
                  manufacturer,
                  length,
                  cost_in_credits,
                  crew,
                  passengers,
                  max_atmosphering_speed,
                  cargo_capacity,
                  consumables,
                } = categories as Vehicles;

                return (
                  <Card key={`${categories}+${index}`}>
                    <CardHeader>
                      <Heading size="md">{name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <List spacing={3} marginBottom={3}>
                        <ListItem paddingLeft={3}>
                          {" "}
                          <Text fontWeight="bold"> Model</Text> {model}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Vehicle Class</Text>{" "}
                          {vehicle_class}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Manufacturer</Text>
                          {manufacturer}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold">Cost in Credits</Text>
                          {cost_in_credits}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Length</Text>
                          {length}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Crew</Text>
                          {crew}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Passengers</Text>
                          {passengers}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Max Atmosphering Speed</Text>
                          {max_atmosphering_speed}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Cargo Capacity</Text>
                          {cargo_capacity}
                        </ListItem>
                        <ListItem paddingLeft={3}>
                          <Text fontWeight="bold"> Consumables</Text>
                          {consumables}
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                );
              }
            })
          )}
        </SimpleGrid>

        {/* Pagination Buttons */}
        <Flex css={{ margin: "25px" }} justifyContent="center" gap="20px">
          {data && data?.previous !== null && category !== "" && (
            <Button
              onClick={(e) => handlePageChange(e.currentTarget.value)}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
              value="prev"
            >
              Previous Page
            </Button>
          )}
          {data && data?.next !== null && category !== "" && (
            <Button
              onClick={(e) => handlePageChange(e.currentTarget.value)}
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
