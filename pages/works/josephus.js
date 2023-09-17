import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { VStack, Text, Box, Heading, Link, Badge } from '@chakra-ui/layout';
import { List, ListItem, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Container from '../../components/Container';

export default function josephus() {
  return (
    <Container>
      <VStack>
        <Heading>Josephus Game</Heading>
        <Box w="100%" maxWidth="80ch">
          <Link
            href="https://kaigewang.github.io/WebGL_JosephusCircle/"
            isExternal
          >
            <Image src="/images/works/josephus.png" alt="josephus.png" />
          </Link>
          <Text>
            Josephus game is a game about the famous Josephus problem. The game
            was developed by Kaige, Shuyi and I. Our professor invited us to
            make a game for the open day demonstration purpose and we had only
            two weeks to do it after the exam.
          </Text>

          <Text fontWeight="bold" lineHeight="120%">
            Game Rules
          </Text>

          <Text>
            There are a number of soldiers that line up to a circle. Starting
            from the first soldier, they kill the next soldier one by one. What
            you need is pick the soldier that can be the last one stand on the
            field.
          </Text>
          <br />
          <List>
            <ListItem>
              <Badge mr="5px">url</Badge>
              <Link
                href="https://kaigewang.github.io/WebGL_JosephusCircle/"
                isExternal
              >
                https://kaigewang.github.io/WebGL_JosephusCircle/
                <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Github repo</Badge>
              <Link href="https://github.com/KaigeWang/josephus" isExternal>
                https://github.com/KaigeWang/josephus <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Tools</Badge>Unity, C#
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
