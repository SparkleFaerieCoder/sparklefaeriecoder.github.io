import React from 'react';
import {auth} from '../services/firebase-service';
import {Button, Box, Text, Image, Heading, Paragraph} from 'grommet';
import {Header, Gallery, Footer, Grid, PostHeader} from '../components';
import {Linkedin, Github, Twitter} from 'grommet-icons';

const posts = [
  {
    id: '123',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
    url: '#',
  },
  {
    id: '456',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
    url: '#',
  },
  {
    id: '789',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
    url: '#',
  },
  {
    id: '1011',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
    url: '#',
  },
  {
    id: '1213',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
    url: '#',
  },
  {
    id: '1415',
    src: '//v2.grommet.io/assets/IMG_4245.jpg',
    title: 'Lorem ipsum dolor sit',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
    createdOn: new Date(),
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
            <PostHeader data={posts[0]} backgroundColor='white' color='black' layout='column'/>
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
