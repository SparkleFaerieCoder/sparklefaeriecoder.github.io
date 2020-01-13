import React from 'react';
import {auth} from '../services/firebase-service';
import {Button, Box, Text, Image, Heading, Paragraph} from 'grommet';
import {Header, Gallery, Footer, Grid} from '../components';
import {Linkedin, Github, Twitter} from 'grommet-icons';

const posts = [
  {
    id: '123',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
  {
    id: '456',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
  {
    id: '789',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
  {
    id: '1011',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
  {
    id: '1213',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
  {
    id: '1415',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'title',
    url: '#',
  },
];

const Home = () => {
  return (
    <>
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
        <Grid
          columns={['1/2', '1/2']}
          rows={['medium', 'medium']}
          gap="small"
          areas={{
            small: [
              {name: 'caption', start: [0, 1], end: [1, 1]},
              {name: 'image', start: [0, 0], end: [1, 0]},
            ],
            medium: [
              {name: 'caption', start: [0, 0], end: [0, 0]},
              {name: 'image', start: [1, 0], end: [1, 0]},
            ],
          }}
        >
          <Box gridArea='caption' justify='center' pad='large' gap='small'>
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
          <Box gridArea='image' justify='center' pad='large' gap='small'>
            <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
          </Box>
        </Grid>
      </Box>
      <Gallery data={posts}/>
      <Footer/>
    </>
  );
};

export default Home;
