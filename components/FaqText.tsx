
import { Flex, Text } from "@chakra-ui/react";

export default function FaqText() {
  return (
    <Flex
      mb={{base: 5, md: 0}}
      fontSize={{ base: "48px", sm: "48px", md: "72.654px", lg: "72.654px" }}
      flexDir="column"
      bgImage={"https://github.com/lazyfuhrer/strive-creator-website/blob/main/public/strive1.svg"}
      bgPosition="right 20% bottom"
      bgRepeat={"no-repeat"}
    >
      <Text fontWeight={300} mb={-3}>
        FREQUENTLY
      </Text>
      <Text fontWeight={300} mb={-3}>
        ASKED
      </Text>
      <Text fontWeight={600}>QUESTIONS</Text>
    </Flex>
  );
};