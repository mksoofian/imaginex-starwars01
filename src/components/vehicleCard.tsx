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
  category: Vehicles;
};

export function VehicleCard({ category }: Props) {
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
            <Text fontWeight="bold"> Model</Text> {model}
          </ListItem>
          <ListItem paddingLeft={3}>
            <Text fontWeight="bold"> Vehicle Class</Text> {vehicle_class}
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
