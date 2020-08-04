import React from 'react';

interface Theme {
	themeColor: 'dark' | 'light';
	setThemeMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const themeObject: Theme = {
	themeColor: 'dark', // default value,
	setThemeMode: () => {},
};

export const ThemeContext = React.createContext(themeObject);
