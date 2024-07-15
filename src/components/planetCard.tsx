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
  category: Planets;
};

export function PlanetCard({ category }: Props) {
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
            <Text fontWeight="bold"> Diameter</Text> {diameter}
          </ListItem>
          <ListItem paddingLeft={3}>
            <Text fontWeight="bold"> Rotation Period</Text> {rotation_period}
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
}
