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
  category: Species;
};

export function SpeciesCard({ category }: Props) {
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
            <Text fontWeight="bold"> Classification</Text> {classification}
          </ListItem>
          <ListItem paddingLeft={3}>
            <Text fontWeight="bold"> Designation</Text> {designation}
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
}
