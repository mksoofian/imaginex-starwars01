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
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
};

export function SpeciesCard({
  name,
  classification,
  designation,
  average_height,
  average_lifespan,
  eye_colors,
  hair_colors,
  skin_colors,
  language,
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
