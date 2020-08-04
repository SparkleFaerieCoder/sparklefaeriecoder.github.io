import { Grommet } from 'grommet';
import React, { useState } from 'react';
import { ThemeContext } from './context';
import Home from './public/home';
import './scss/app.scss';
import themeStyles from './scss/theme';

const App = () => {
	const color: 'dark' | 'light' = 'dark';
	const [themeColor, setThemeMode] = useState(color);
	return (
		<ThemeContext.Provider value={{ themeColor, setThemeMode }}>
			<Grommet theme={themeStyles} themeMode={themeColor} full plain>
				<Home />
			</Grommet>
		</ThemeContext.Provider>
	);
};

export default App;
