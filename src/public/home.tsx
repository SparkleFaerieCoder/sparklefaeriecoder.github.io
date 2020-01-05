import React from 'react';
import Header from '../components/Header';
import {auth} from '../services/firebase-service';
import {Button, Box, Text, Image, Heading, Paragraph} from 'grommet';
import {Linkedin, Github, Twitter} from 'grommet-icons';

const Home = () => {
  return (
    <Box>
      <Box background='#efefef'>
        <Header/>
        <Box border='all' pad='xlarge'>
          <Box width='medium' alignSelf='end' border='all'>
            <Heading level='1' textAlign='start'>Hi, Alexandra Silcox</Heading>
            <Paragraph size="large" textAlign='start'>
            Paragraph - Large
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam esse ab vel maiores, maxime nihil dolore perferendis omnis.
            </Paragraph>
            <Box direction='row'>
              <Button plain={true} icon={<Github color='brand' size='large'/>} onClick={() => {}}/>
              <Button plain={true} icon={<Linkedin color='brand' size='large'/>} onClick={() => {}}/>
              <Button plain={true} icon={<Twitter color='brand' size='large'/>} onClick={() => {}}/>
              <Button plain={true} icon={<Linkedin color='brand' size='large'/>} onClick={() => {}}/>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction='row' alignContent='start' pad='xlarge' height='large'>
        <Box width='50%' justify='center' pad='large' gap='small'>
          <Box direction='row'>
            <Box pad='small'>
              <Box border={{size: 'small', side: 'right', color: 'gray'}} pad={{right: 'medium'}}>
                <Heading level='1'>16</Heading>
                <Text>APR</Text>
              </Box>
            </Box>
            <Box justify='center'>
              <Heading level='2' textAlign='start'>Lorem ipsum dolor sita creem</Heading>
            </Box>
          </Box>
          <Box >
            <Paragraph textAlign='start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia velit nulla ipsa, consequuntur accusamus cupiditate voluptas nam explicabo, debitis quis? Enim soluta quibusdam aspernatur quo explicabo necessitatibus. Qui, facilis.</Paragraph>
          </Box>
        </Box>
        <Box width='50%'>
          <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
