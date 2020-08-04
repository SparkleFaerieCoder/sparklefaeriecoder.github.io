import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const themeStyles = deepMerge(grommet, {
	global: {
		font: {
			family: 'Open Sans',
			size: '18px',
			height: '20px',
		},
	},
});

export default themeStyles;
