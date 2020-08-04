import { Box, Text } from 'grommet';
import React from 'react';

const date = new Date();

export const Footer = () => (
	<Box
		background='dark-1'
		direction='row'
		gap='medium'
		pad={{ vertical: 'small' }}
		justify='start'
		style={{ zIndex: 1000 }}
	>
		<Text textAlign='center'>
			Copyright &copy;{date.getFullYear()} Alexandra Silcox
		</Text>
	</Box>
);

export default Footer;
