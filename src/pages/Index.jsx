import { Container, Box, Heading, Text, VStack, HStack, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Local Community Garden Flourishes",
    description: "The community garden in downtown has seen a surge in participation this year.",
    image: "https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MHx8fHwxNzE3MDUwMTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "New Library Opens in Town",
    description: "A new state-of-the-art library has opened, offering a variety of resources for residents.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjBsaWJyYXJ5fGVufDB8fHx8MTcxNzA1MDE0NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "High School Football Team Wins Championship",
    description: "The local high school football team has won the state championship for the first time in 20 years.",
    image: "https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW18ZW58MHx8fHwxNzE3MDUwMTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Local News
        </Heading>
        {articles.map((article) => (
          <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {article.title}
              </Heading>
              <Text mb={4}>{article.description}</Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
          </Box>
        ))}
        <HStack spacing={4} pt={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
