import React from 'react';
import {Image, Box, ResponsiveContext} from 'grommet';
import {Grid} from './';

interface Image {
    src: string,
    title: string
}

interface Props {
    container?: Object,
    data: Array<Image>

}


const setColumns = (posts: Array<Image>) => {
  let array = [];
  //   while items length > 0
  //   slice two items in array, and push to new array as an object grouping
  do {
    array = array.concat([posts.splice(0, 2)]);
  } while (posts.length > 0);

  return array;
};

export const Gallery = (props: Props) => {
  const columns = setColumns(props.data);
  return (
    <>
      <Box direction='row'>
        {
          columns.map((column, i) => (
            // <Grid
            //   key={i}
            //   columns={['full']}
            //   rows={['medium', 'medium', 'medium']}
            //   areas={{
            //     small: [
            //       {name: `image-${i}`, start: [0, 0], end: [0, 0]},
            //       {name: `image-${i}`, start: [0, 1], end: [0, 1]},
            //     ],
            //     medium: [
            //       {name: `image-${i}`, start: [0, 0], end: [0, 0]},
            //       {name: `image-${i}`, start: [0, 1], end: [0, 1]},
            //     ],
            //   }}
            // >
            <Box
              key={i}
              gridArea={`image-${i}`}
              background={`dark-${i}`}
              border={{color: 'red', size: 'medium'}}
            >
              {column.map((post, e) => (
                <Box
                  key={e}
                  height={
                      i%2 !== 0 && e%2 === 0 ? 'small' :
                      i%2 === 0 && e%2 !== 0 ? 'small' :
                      'medium'
                  }
                >
                  <Image
                    src={post.src}
                    fit={'cover'}
                  />
                </Box>
              ))}
            </Box>
            // </Grid>
          ))
        }
      </Box>
    </>
  );
};

export default Gallery;
