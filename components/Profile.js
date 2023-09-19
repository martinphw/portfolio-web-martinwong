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
        <Text>
          I used to be a civil engineer, by that time I start to write simple
          VBA programs to help improve my working efficiency. Later on I found I
          enjoy coding more than the civil engineering job so I decided to take
          an IT master and change my career path. Now I want to become a full
          stack engineer.
        </Text>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor of Civil Engineering in University of Hong Kong
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Work as Civil Engineer in Hong Kong.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Start the study of Master of Information Technology at RMIT.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Complete the Master of Information Technology at RMIT.
        </BioSection>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Skill Set
        </Heading>
        <Text>
          I have experience of using the tech mentioned below for my assignments
          and projects:
        </Text>
        <Text>Java, JavaFX, Python, Flask</Text>
        <Text>
          Javascript, ReactJS, Material-ui-reactjs, chakra-ui-reactjs, AngularJs
        </Text>
        <Text>Unity 2D and 3D in C#, unity ML-Agents</Text>
        <Text>AWS EC2, S3, transcript</Text>
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
