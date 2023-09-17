import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  VStack,
  Text,
  Box,
  Heading,
  Link,
  Badge,
  AspectRatio,
} from '@chakra-ui/layout';
import { List, ListItem, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../../components/Container';

export default function awsTranscript() {
  return (
    <Container>
      <VStack>
        <Heading>AWS-transcription</Heading>
        <Box w="100%" maxWidth="80ch">
          <AspectRatio ratio={16 / 9}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/83WcwqW8BUA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
          <Text>
            This is a website that I developed to assist my study since the
            teaching mode had a drastic from face to face to totally online. I
            can upload the pre-recorded lecture video to the server and it
            generates the transcription of the lecture video. I can read and
            revise the transcription as a learning material instead of watch the
            whole video again. I use an ec2 to install apache server for this
            web and host the app with flask. Since the free credits are used up,
            The web is currently closed.
          </Text>

          <br />
          <List>
            <ListItem>
              <Badge mr="5px">demo video</Badge>
              <Link href="https://youtu.be/83WcwqW8BUA" isExternal>
                https://youtu.be/83WcwqW8BUA
                <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Github repo</Badge>
              <Link
                href="https://github.com/s3833684/aws-transcription"
                isExternal
              >
                https://github.com/s3833684/aws-transcription{' '}
                <ExternalLinkIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Badge mr="5px">Tools</Badge>flask, AWS-ec2, S3, transcript and
              boto3.
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
