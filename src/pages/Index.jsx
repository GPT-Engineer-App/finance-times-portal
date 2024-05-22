import { Container, Text, VStack, Heading, Button, Box, Image, Flex, HStack, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Top Stories</Link>
            <Link href="#" color="white">Latest News</Link>
            <Link href="#" color="white">Featured</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main Articles Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h2" size="xl">Top Stories</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">Story 1</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">Story 2</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box>
              <Heading as="h2" size="xl">Latest News</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">News 1</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">News 2</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box>
              <Heading as="h2" size="xl">Featured Articles</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">Article 1</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">Article 2</Heading>
                  <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={8} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Additional Links</Heading>
              <VStack spacing={2} mt={2} align="start">
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </VStack>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Advertisements</Heading>
              <Text mt={2}>Ad content goes here.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <FaFacebook />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter />
            </Link>
            <Link href="#" isExternal>
              <FaLinkedin />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;