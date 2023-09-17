import { VStack, Box, Heading, Text } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <Container>
        <VStack>
          <Box w="100%" maxWidth="80ch">
            <Heading>Contact me</Heading>
            <Text>Email: aa_121314martin@msn.com</Text>
            <Text>Phone number: +61 0432397773</Text>
            <Text>
              I am current in Melbourne but welcom to job from the world.
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
}
