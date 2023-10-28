import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    AccordionIcon,
    Flex,
  } from "@chakra-ui/react";
  
  export default function FaqAccordion() {
    return (
      <Accordion
        mt={{ base: 5, md: 0 }}
        width="100%"
        maxW="800px"
        rounded="lg"
        allowToggle
        style={{backgroundColor:'#000'}}
      >
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Flex
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={{ base: "flex-start", md: "center" }}
              gap={2}
              fontSize={{ base: "18px", md: "24px" }}
            >
              <Text
                fontWeight={500}
                color={"#FFF"}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                className="boldQ"
              >
                01.
              </Text>
              <Text 
                
                className="boldText"
              fontWeight={300} color={"rgba(255, 255, 255, 0.61)"}>
                What is creator launchpad?
              </Text>
            </Flex>
            <AccordionIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel p={5} bg="rgba(94, 93, 93, 0.17)">
            <Text
              color={"rgba(255, 255, 255, 0.61)"}
              fontWeight={300}
              fontSize={{ base: "15px", md: "18px" }}
              textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              
            >
              Lorem ipsum dolor sit amet consectetur. Bibendum sit iaculis
              volutpat nisl enim in at. Amet dignissim proin vitae dui vitae
              consequat mattis. Sit aliquam quam morbi aliquet.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Flex
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={{ base: "flex-start", md: "center" }}
              gap={2}
              fontSize={{ base: "18px", md: "24px" }}
            >
              <Text
               className="boldQ"
                fontWeight={500}
                color={"#FFF"}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              >
                02.
              </Text>
              <Text 
                className="boldText"
              
              fontWeight={300} color={"rgba(255, 255, 255, 0.61)"}>
                How do I raise funds/ start campaign?
              </Text>
            </Flex>
            <AccordionIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel p={5} bg="rgba(94, 93, 93, 0.17)">
            <Text
              color={"rgba(255, 255, 255, 0.61)"}
              fontWeight={300}
              fontSize={{ base: "15px", md: "18px" }}
              textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla
              omnis aliquam eligendi amet eveniet praesentium magnam quae a? Odio
              sapiente nulla impedit delectus, suscipit doloribus eveniet?
              Voluptas, excepturi soluta.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Flex
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={{ base: "flex-start", md: "center" }}
              gap={2}
              fontSize={{ base: "18px", md: "24px" }}
            >
              <Text
                fontWeight={500}
                color={"#FFF"}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                className="boldQ"
              >
                03.
              </Text>
              <Text
                className="boldText"
              
              fontWeight={300} color={"rgba(255, 255, 255, 0.61)"}>
                Who will invest in my project / campaign?
              </Text>
            </Flex>
            <AccordionIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel p={5} bg="rgba(94, 93, 93, 0.17)">
            <Text
              color={"rgba(255, 255, 255, 0.61)"}
              fontWeight={300}
              fontSize={{ base: "15px", md: "18px" }}
              textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            >
              To get started with Chakra UI, you can install it via npm or yarn,
              and then import the components you need in your project. The Chakra
              UI documentation is also a great resource for getting started and
              learning more about the library.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Flex
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={{ base: "flex-start", md: "center" }}
              gap={2}
              fontSize={{ base: "18px", md: "24px" }}
            >
              <Text
                fontWeight={500}
                color={"#FFF"}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                className="boldQ"
              >
                04.
              </Text>
              <Text 
                className="boldText"
              
              fontWeight={300} color={"rgba(255, 255, 255, 0.61)"}>
                What does the investor/fan get in return for investing ?
              </Text>
            </Flex>
            <AccordionIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel p={5} bg="rgba(94, 93, 93, 0.17)">
            <Text
              color={"rgba(255, 255, 255, 0.61)"}
              fontWeight={300}
              fontSize={{ base: "15px", md: "18px" }}
              textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            >
              To get started with Chakra UI, you can install it via npm or yarn,
              and then import the components you need in your project. The Chakra
              UI documentation is also a great resource for getting started and
              learning more about the library.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
          >
            <Flex
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={{ base: "flex-start", md: "center" }}
              gap={2}
              fontSize={{ base: "18px", md: "24px" }}
            >
              <Text
                fontWeight={500}
                color={"#FFF"}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                className="boldQ"
              >
                05.
              </Text>
              <Text
                className="boldText"
              
              fontWeight={300} color={"rgba(255, 255, 255, 0.61)"}>
                How do I distribute my earnings back to my fans?
              </Text>
            </Flex>
            <AccordionIcon fontSize="24px" />
          </AccordionButton>
          <AccordionPanel p={5} bg="rgba(94, 93, 93, 0.17)">
            <Text
              color={"rgba(255, 255, 255, 0.61)"}
              fontWeight={300}
              fontSize={{ base: "15px", md: "18px" }}
              textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            >
              To get started with Chakra UI, you can install it via npm or yarn,
              and then import the components you need in your project. The Chakra
              UI documentation is also a great resource for getting started and
              learning more about the library.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };