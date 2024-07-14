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
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
};

export function StarshipCard({
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
}: Props) {
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
            <Text fontWeight="bold"> Starship Class</Text> {starship_class}
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
}
