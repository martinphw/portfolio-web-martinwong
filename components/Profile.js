import { Heading, Text, Link } from '@chakra-ui/layout';
import { Stack, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { BioSection, BioYear } from './bio';

function Profile() {
  return (
    <Stack w="100%" maxWidth="80ch">
      <Box>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Text align={'justify'}>
          Full-stack software engineer with 2 years of experience in Angular Web and Xamarin Android app development. 
          Although my current company uses the Microsoft tech stacks, I enjoy playing around with other frameworks. 
          Currently learning and practicing React.js with my personal projects, include this portfolio web.
        </Text>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Now </BioYear>
          Work as a full stack software engineer, develop both web and android application with Angular, .Net and Xamarin
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Complete the Master of Information Technology at RMIT.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Start the study of Master of Information Technology at RMIT.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Work as Civil Engineer in Hong Kong.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor of Civil Engineering in University of Hong Kong
        </BioSection>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Skill Set
        </Heading>
        <Text>Angular and rxjs</Text>
        <Text>React.js with next.js, material ui and chakra ui</Text>
        <Text>.NET and Xamarin</Text>
        <Text>Springboot</Text>
        <Text>Azure and AWS</Text>
      </Box>
      <Box alignSelf="center">
        <Link href="/works" passhref m="20">
          <Button>See my works</Button>
        </Link>
      </Box>
      <br />
    </Stack>
  );
}

export default Profile;
