// import {auth} from '../services/firebase-service';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Github, Linkedin, Twitter } from 'grommet-icons';
import React, { useContext } from 'react';
import { Dots, Navigation } from '../components';
import { ThemeContext } from '../context';
import '../scss/shapes.scss';

// const posts = [
// 	{
// 		id: '123',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// 	{
// 		id: '456',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// 	{
// 		id: '789',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// 	{
// 		id: '1011',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// 	{
// 		id: '1213',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// 	{
// 		id: '1415',
// 		src: '//v2.grommet.io/assets/IMG_4245.jpg',
// 		title: 'Lorem ipsum dolor sit',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//        Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
//        explicabo omnis et, blanditiis, iure autem, sint laborum.
//        Reiciendis in animi non, sed cumque minima?`,
// 		createdOn: new Date(),
// 		url: '#',
// 	},
// ];

const Home = () => {
	const theme = useContext(ThemeContext);

	return (
		<Box
			height='100%'
			background={{ color: theme.themeColor === 'dark' ? 'black' : 'white' }}
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			<Dots />
			<>
				{/* <div className='flower'>
					<div className='circle' />
					<div className='petals'>
						<div className='triangle up' />
						<div className='triangle down' />
						<div className='triangle left' />
						<div className='triangle right' />
					</div>
				</div> */}

				<Box
					direction='row-reverse'
					height='100%'
					style={{ position: 'absolute', zIndex: 100 }}
				>
					<Navigation />
					<Box
						width='large'
						background={{
							size: 'contain',
							position: 'center bottom',
							image: `url(https://firebasestorage.googleapis.com/v0/b/spf-blog-service.appspot.com/o/as-dark-mode-compressed.png?alt=media&token=f084ad60-37ff-40bb-b48b-72286d551ae6)`,
						}}
					/>
					<Box
						// width='large'
						alignSelf='end'
						// border='all'
						background={{
							color: theme.themeColor === 'dark' ? 'black' : 'white',
							opacity: 1,
						}}
						margin={{ vertical: 'large', horizontal: 'medium' }}
						style={{
							zIndex: 1000,
							borderRadius: '25px',
						}}
						pad={{ vertical: 'medium', horizontal: 'medium' }}
					>
						<Heading level='1' textAlign='start'>
							Hi, I'm Alexandra Silcox
						</Heading>

						<Paragraph size='large' textAlign='start'>
							She/her/hers. Software Engineer, specializing in UI/UX development
							for mobile and web.
						</Paragraph>
						<Box direction='row'>
							<Button
								plain
								icon={<Github color='brand' size='large' />}
								onClick={() => {}}
								margin='small'
							/>
							<Button
								plain
								icon={<Linkedin color='brand' size='large' />}
								onClick={() => {}}
								margin='small'
							/>
							<Button
								plain
								icon={<Twitter color='brand' size='large' />}
								onClick={() => {}}
								margin='small'
							/>
						</Box>
						<Box width='medium' margin={{ vertical: 'medium' }}>
							<Button
								href={
									'https://drive.google.com/u/0/uc?id=1deqBCnyIpXz7FyXt8ARWlhc4gPSgYauw&export=download'
								}
								label='Learn more'
								alignSelf='start'
								type={'button'}
								a11yTitle='Learn more'
							/>
						</Box>
					</Box>
				</Box>
			</>
			{/* <Box direction='row' alignContent='start' pad='xlarge' height='large'> */}
			{/* <Grid
					columns={['1/2', '1/2']}
					rows={['medium', 'medium']}
					gap='small'
					areas={{
						small: [
							{ name: 'caption', start: [0, 1], end: [1, 1] },
							{ name: 'image', start: [0, 0], end: [1, 0] },
						],
						medium: [
							{ name: 'caption', start: [0, 0], end: [0, 0] },
							{ name: 'image', start: [1, 0], end: [1, 0] },
						],
					}}
				>
					<Box gridArea='caption' justify='center' pad='large' gap='small'>
						<PostHeader
							data={posts[0]}
							backgroundColor='white'
							color='black'
							layout='column'
						/>
					</Box>
					<Box gridArea='image' justify='center' pad='large' gap='small'>
						<Image src='//v2.grommet.io/assets/IMG_4245.jpg' fit='cover' />
					</Box>
				</Grid>
			</Box>
			<Gallery data={posts} /> */}

			{/* <Footer /> */}
		</Box>
	);
};

export default Home;
