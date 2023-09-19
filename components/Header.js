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
      >
        <Box mt={isNotSmallerScreen ? '0' : '16'} align="flex-start">
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
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Graduate of RMIT at Master of Information Technology. Looking for
            job opportunities!
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
          src="https://cdn.dribbble.com/users/36443/screenshots/4735135/media/af03cb1bb7e329038cacd14e672ab66a.jpg?compress=1&resize=800x600"
          ml="20px"
          alt="icon"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
