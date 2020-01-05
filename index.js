import React from 'react';
import ReactDOM from 'react-dom';
import './src/scss/app.scss';
import App from './src/App';
import {Grommet} from 'grommet';
import theme from './src/scss/theme';
import {grommet} from 'grommet/themes';

ReactDOM.render(
    <Grommet theme={theme}><App /></Grommet>, document.getElementById('root'),
);
