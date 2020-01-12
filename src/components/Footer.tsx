import React from 'react';
import {Box, Text} from 'grommet';

const date = new Date;

export const Footer = () => (
  <Box background='dark-1' direction="row" gap="medium" pad={{vertical: 'small'}} justify='center'>
    <Text textAlign='center'>Copyright &copy;{date.getFullYear()} Alexandra Silcox</Text>
  </Box>
);

export default Footer;
