import { Box, Button, Header as GrommetHeader } from 'grommet';
import { Info } from 'grommet-icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../context';

export const Avatar = ({ ...rest }) => (
	<Box
		height='xxsmall'
		width='xxsmall'
		round='full'
		background='url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)'
		{...rest}
	/>
);

export const Navigation = () => {
	const { themeColor, setThemeMode } = useContext(ThemeContext);
	return (
		<Box style={{ position: 'absolute', width: '100%' }}>
			<GrommetHeader
				background='transparent'
				pad='large'
				justify='end'
				height={{ min: '25', max: '500' }}
			>
				{/* <Box direction='row' gap='medium'>
				<Anchor label='Home' href='#' a11yTitle='Home' />
				<Anchor label='About' href='#' a11yTitle='About' />
				<Anchor label='Contact' href='#' a11yTitle='Contact' />
			</Box>
			<Button plain={true} icon={<Search color='brand' />} onClick={() => {}} /> */}
				<Button
					icon={<Info />}
					label={`${themeColor === 'dark' ? 'On' : 'Off'}`}
					onClick={() => setThemeMode(themeColor === 'dark' ? 'light' : 'dark')}
					primary
				/>
			</GrommetHeader>
		</Box>
	);
};

export default Navigation;
