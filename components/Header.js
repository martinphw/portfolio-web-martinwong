import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const MotionBox = motion(Box);

  return (
    <Stack>
      <Flex
        direction={['column', 'row', 'row', 'row', 'row', 'row']}
        spacing="50px"
        p={isNotSmallerScreen ? '8' : '0'}
        alignSelf="flex-start"
        minWidth="100%"
        mt={[4,4,8]}
      >
        <Box mt={isNotSmallerScreen ? '0' : '16'} align="flex-start" maxWidth="70ch">
          <Text fontSize="3xl" fontWeight="semibold">
            Hi I am
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Martin Wong
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'} align={'justify'}>
            Full-stack software engineer with the Microsoft tech stack e.g. Angular, .Net, Xamarin and Azure.
            Looking for opportunity to update my skill set with modern technology, curenntly learning React, golang etc.
          </Text>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? '0' : '20'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="150px"
          src='/images/icon.jpg'
          ml="20px"
          alt="icon"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
