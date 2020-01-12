import React from 'react';
import {Grid as GrommetGrid, ResponsiveContext} from 'grommet';

const Grid = ({children, areas, ...props}) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <GrommetGrid areas={areas[size]} {...props}>
      {children}
    </GrommetGrid>
  );
};

export default Grid;
