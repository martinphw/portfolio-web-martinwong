import { Heading, Text, VStack, Box, SimpleGrid } from '@chakra-ui/react';

import Container from '../components/Container';
import { GridItem, WorkGridItem } from '../components/grid-items';

const thumbTranscript = '/images/works/AWS-transcript-1.png';
const thumbPathfinding = '/images/works/pathfinding-visualizer.png';
const thumbJosephus = '/images/works/josephus.png';
const thumbTripleFantasy = '/images/works/triple-fantasy.png';

export default function works() {
  return (
    <>
      <Container>
        <VStack>
          <Box w="100%" maxWidth="80ch">
            <Heading>Works</Heading>
            <Text>
              Here shows my works, including both assignment for my master and
              non assignment projects.
            </Text>
            <br />
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
              <WorkGridItem
                id="pathfinding-visualizer"
                title="Pathfinding Visualizer"
                thumbnail={thumbPathfinding}
              >
                {console.log(thumbPathfinding)}
                Pathfinding Visualizer is a webpage shows how the pathfinding
                algorithm works with animation, which made by react and material
                ui.
              </WorkGridItem>
              <WorkGridItem
                id="aws-transcript"
                title="AWS Transcript"
                thumbnail={thumbTranscript}
              >
                An assignment that use serveral AWS services, includeing EC2, S3
                and transcript.
              </WorkGridItem>
              <WorkGridItem
                id="josephus"
                title="Josephus Game"
                thumbnail={thumbJosephus}
              >
                This is a game my friends and I write for the open day of RMIT.
              </WorkGridItem>
              <WorkGridItem
                id="triple-fantasy"
                title="Triple-Fantasy-Logger"
                thumbnail={thumbTripleFantasy}
              >
                This is a tool to assist my friends and me to play a game called
                triple fantasy.
              </WorkGridItem>
            </SimpleGrid>
          </Box>
        </VStack>
        <br />
      </Container>
    </>
  );
}
