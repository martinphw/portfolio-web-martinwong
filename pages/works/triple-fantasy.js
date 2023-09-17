import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { VStack, Text, Box, Heading, Link, Badge } from '@chakra-ui/layout';
import { List, ListItem, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Container from '../../components/Container';

export default function tripleFantasy() {
  return (
    <Container>
      <VStack>
        <Heading>Josephus Game</Heading>
        <Box w="100%" maxWidth="80ch">
          <Link
            href="https://s3833684.github.io/triple-fantasy-card-logger/"
            isExternal
          >
            <Image
              src="/images/works/triple-fantasy.png"
              alt="triple-fantasy.png"
            />
          </Link>
          <Text>
            The app is a tool for my friends and me to assit our play in a game
            called triple fantasy. It use 27 cards to make different
            combinations to achieve higher score, the mechanism is pretty like
            poker.
          </Text>
          <Text>
            This tool can record which card already discarded and gain
            information about what combinations are left. There is also a
            calculator to give the best choice at the bonus stage.
          </Text>

          <br />
          <List>
            <ListItem>
              <Badge mr="5px">url</Badge>
              <Link
                href="https://s3833684.github.io/triple-fantasy-card-logger/"
                isExternal
              >
                https://s3833684.github.io/triple-fantasy-card-logger/
                <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Github repo</Badge>
              <Link
                href="https://github.com/s3833684/triple-fantasy-card-logger"
                isExternal
              >
                https://github.com/s3833684/triple-fantasy-card-logger/
                <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Tools</Badge>ReactJS, material-UI
            </ListItem>
          </List>
        </Box>
        <Box>
          <NextLink href="/works" passHref m="20">
            <Button>Back</Button>
          </NextLink>
        </Box>
        <br />
      </VStack>
    </Container>
  );
}
