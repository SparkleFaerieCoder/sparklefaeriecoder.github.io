import React from 'react';
import {Box, Text, Heading, Paragraph} from 'grommet';


interface Props {
  color: string,
  backgroundColor: string,
  data: Post,
  layout: 'column' | 'row'

}

interface Post {
  src: string,
  title: string,
  description: string,
  createdOn: Date,
  url: string
}

const PostHeader = (props: Props) => {
  const isColumn = props.layout === 'column';
  return (
    <>
      <Box direction='row' background={props.backgroundColor} style={{height: '100%'}}>
        <Box pad='small' justify='center'>
          <Box
            border={{size: 'small', side: 'right', color: props.color}}
            pad={{right: 'medium'}}
            justify='center'
            style={{paddingTop: isColumn ? 15 : 50, paddingBottom: isColumn ? 15 : 50}}
          >
            <Heading level='1' color={props.color} style={{marginTop: 0}}>16</Heading>
            <Text color={props.color}>APR</Text>
          </Box>
        </Box>
        <Box justify='center'>
          <Heading level='2' textAlign='start' color={props.color}>{props.data.title}</Heading>
          {props.layout === 'row' ? <Paragraph textAlign='start' color={props.color}>{props.data.description}</Paragraph> : null}
        </Box>
      </Box>
      {
      isColumn ?
      <>
        <Paragraph textAlign='start' color={props.color}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia velit nulla ipsa, consequuntur accusamus cupiditate voluptas nam explicabo, debitis quis? Enim soluta quibusdam aspernatur quo explicabo necessitatibus. Qui, facilis.</Paragraph>
      </> :
      null
      }
    </>
  );
};

export default PostHeader;
