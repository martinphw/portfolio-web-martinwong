import { VStack } from '@chakra-ui/react';
import Container from '../components/Container';
import Header from '../components/Header';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <Container>
        <VStack>
          <Header></Header>
          <Profile></Profile>
        </VStack>
      </Container>
    </>
  );
}
