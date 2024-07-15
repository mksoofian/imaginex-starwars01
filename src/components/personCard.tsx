import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

type Props = {
  category: People;
};

export function PersonCard({ category }: Props) {
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
  } = category;

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <List spacing={3} marginBottom={3}>
          <ListItem paddingLeft={3}>
            {" "}
            <Text fontWeight="bold"> Birth Year</Text> {birth_year}
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
}
