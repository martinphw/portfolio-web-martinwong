import React from 'react';
import { Heading, Flex, Spacer, Link } from '@chakra-ui/layout';
import { useColorMode, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router'

import DarkModeSwitch from '../components/DarkModeSwitch';
import Footer from './footer';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const bgColor = {
    light: 'white',
    dark: '#171717',
  };

  const color = {
    light: 'black',
    dark: 'white',
  };

  const navHoverBg = {
    light: 'gray.600',
    dark: 'gray.300',
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
      >
        <Flex w="100%">
          <Heading
            ml="8"
            size="md"
            fontWeight="semibold"
            color="cyan.400"
            alignSelf="center"
          >
            Martin Wong
          </Heading>
          <Button
            as="a"
            ml={8}
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            onClick={() => router.push('/')}
          >
            Home
          </Button>
          <Button
            as="a"
            ml={8}
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            onClick={() => router.push('/works')}
          >
            Works
          </Button>
          <Spacer></Spacer>
          <DarkModeSwitch />
        </Flex>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
