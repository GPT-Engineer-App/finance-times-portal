import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Financial Times
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Stay updated with the latest financial news and trends.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
      <Box mt={10}>
        <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Text fontSize="md" textAlign="center">
          &copy; 2023 Financial Times. All rights reserved.
        </Text>
      </Flex>
    </Container>
  );
};

export default Index;