import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { toPascalCase, convertSnakeCase } from "@/utils/convertCase";
import { useEffect, useState } from "react";

type Props = {
  category: Categories;
  title: string;
};

export function ResultCard({ category, title }: Props) {
  //   const [result, setResult] = useState("");
  //   const [url, setUrl] = useState("");

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         Object.entries(data).map(([key]) => {
  //           if (key.includes("title")) {
  //             setResult(data.title);
  //           } else setResult(data.name);
  //         });
  //       })
  //       .catch((error) => "Oops, something went wrong.");
  //   }, [url]);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <List spacing={3} marginBottom={3}>
          {Object.entries(category).map(([key, value]) => {
            // Check if key is snake_case and convert to Pascal Case if so...
            if (key.includes("_")) {
              const sentenceCase = convertSnakeCase(key);
              return (
                <ListItem key={`${key}-${value}`} paddingLeft={3}>
                  <Text fontWeight="bold"> {sentenceCase}</Text> {value}
                </ListItem>
              );
            }
            const pascalCase = toPascalCase(key); // Otherwise, just make sure it presents key in Pascal Case

            // If the value is an array, iterate and return the name or title
            if (Array.isArray(value)) {
              value.map((link) => {
                // setUrl(link);

                return (
                  <ListItem key={`${key}-${value}`} paddingLeft={3}>
                    <Text fontWeight="bold"> {pascalCase}</Text> {link}
                  </ListItem>
                );
              });
            }
            return (
              <ListItem key={`${key}-${value}`} paddingLeft={3}>
                <Text fontWeight="bold"> {pascalCase}</Text>
                {value}
              </ListItem>
            );
          })}
        </List>
      </CardBody>
    </Card>
  );
}
