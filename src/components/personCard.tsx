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

type Props = {
  category: People;
};

export function PersonCard({ category }: Props) {
  const { name } = category;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <List spacing={3} marginBottom={3}>
          {Object.entries(category).map(([key, value]) => {
            // Check if key is snake_case and convert to Pascal Case if so
            if (key.includes("_")) {
              const sentenceCase = convertSnakeCase(key);

              return (
                <ListItem key={category.url} paddingLeft={3}>
                  <Text fontWeight="bold"> {sentenceCase}</Text> {value}
                </ListItem>
              );
            }
            // Otherwise, just make sure it presents key in Pascal Case
            const pascalCase = toPascalCase(key);
            return (
              <ListItem key={category.url} paddingLeft={3}>
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
