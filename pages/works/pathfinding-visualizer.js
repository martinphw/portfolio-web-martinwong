import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { VStack, Text, Box, Heading, Link, Badge } from '@chakra-ui/layout';
import { List, ListItem, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Container from '../../components/Container';

export default function pathfinding() {
  return (
    <Container>
      <VStack>
        <Heading>Pathfinding Visualizer</Heading>
        <Box w="100%" maxWidth="80ch">
          <Link href="https://s3833684.github.io/Pathfinding/" isExternal>
            <Image
              src="/images/works/pathfinding-visualizer.png"
              alt="pathfinding-visualizer.png"
            />
          </Link>
          <Text>
            This is a webpage visualize how the pathgfinding algorithm works. I
            created this page following the tutorial of Celement and made some
            changes by myself. For the detail implementation, please refer to
            the github repo.
          </Text>
          <br />
          <List>
            <ListItem>
              <Badge mr="5px">Url</Badge>
              <Link href="https://s3833684.github.io/Pathfinding/" isExternal>
                https://s3833684.github.io/Pathfinding/ <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Github repo</Badge>
              <Link href="https://github.com/s3833684/Pathfinding" isExternal>
                https://github.com/s3833684/Pathfinding <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Tools</Badge>ReactJS, material-ui
            </ListItem>
          </List>
        </Box>
        <Box>
          <NextLink href="/works" passHref m="20">
            <Button>Back</Button>
          </NextLink>
        </Box>
      </VStack>
    </Container>
  );
}
