import React from 'react';
import {Anchor, Header as GrommetHeader, Box, Button} from 'grommet';
import {Search} from 'grommet-icons';

export const Avatar = ({...rest}) => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
    {...rest}
  />
);

export const Header = () => (
  <GrommetHeader background="transparent" pad="large" justify='end' height={{min: '25', max: '500'}}>
    <Box direction="row" gap="medium">
      <Anchor label="Home" href="#" a11yTitle="Home"/>
      <Anchor label="About" href="#" a11yTitle="About"/>
      <Anchor label="Contact" href="#" a11yTitle="Contact"/>
    </Box>
    <Box>
      <Button plain={true} icon={<Search color='brand' />} onClick={() => {}}/>
    </Box>
  </GrommetHeader>
);

export default Header;
