import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

type Props = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

export function FilmsCard({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
}: Props) {
  return (
    <Card>
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
            <AccordionPanel pb={4}>{opening_crawl}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}
