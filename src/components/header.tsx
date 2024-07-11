import { Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
export default function Header() {
  return (
    <Flex
      width="100%"
      minHeight="25px"
      backgroundColor="white"
      padding="5px 5vw"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="black"> Imperial Database </Text>
      <Image
        src={"/vader.png"}
        alt="darth vader logo"
        width={50}
        height={50}
      ></Image>
    </Flex>
  );
}
