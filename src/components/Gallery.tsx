import React, {useState, useContext, useEffect} from 'react';
import {Image, Box, ResponsiveContext} from 'grommet';
import PostHeader from './Post/Header';

interface Post {
    src: string,
    title: string,
    description: string,
    createdOn: Date,
    url: string
  }

interface Props {
    container?: Object,
    data: Array<Post>

}

const set = (posts: Array<Post>) => {
  let array = [];
  //   while items length > 0
  //   slice two items in array, and push to new array as an object grouping
  do {
    array = array.concat([posts.splice(0, 2)]);
  } while (posts.length > 0);

  return array;
};

const getImageSize = (display: string, row: number, column: number): string => {
  let imageSize = 'medium';

  if (display === 'medium') {
    if (
    // column is not even and row is
      column%2 !== 0 && row%2 === 0 ||
      // OR column is even and row is not even
      column%2 === 0 && row%2 !== 0
    ) imageSize = 'small';
  }

  return imageSize;
};


const Gallery = (props: Props) => {
  const [columns, setColumns] = useState([]);
  const [hover, toggleHover] = useState({index: undefined});

  useEffect(() => {
    setColumns(() => set(props.data));
  }, [props.data]);

  const toggle = (index?: number) => {
    return toggleHover({index});
  };

  const size = useContext(ResponsiveContext);
  const sizeSmall = size === 'small';

  return (
    <Box direction={sizeSmall ? 'column': 'row'}>
      {
        columns.map((column, i) => {
          const posts = column;
          return (
            <Box
              key={i}
              background={`dark-1`}
              width={{min: sizeSmall ? '100%': '33%'}}
              direction={'column'}>
              {
                posts.map((post, e) => (
                  <Box key={e} style={{position: 'relative', overflow: 'hidden'}}>
                    <Box
                      key={e}
                      height={getImageSize(size, e, i)}
                      width={{min: '100%'}}
                      style={{zIndex: 1}}
                    >
                      <Image
                        key={e}
                        src={post.src}
                        fit={'cover'}
                      />
                    </Box>

                    <Box
                      onMouseEnter={() => toggle(post.id)}
                      onMouseLeave={() => toggle()}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        height: '100%',
                        zIndex: 1000,
                        opacity: hover.index === post.id ? 0.5 : 0,
                      }}
                      animation={hover.index === post.id ? 'fadeIn': 'fadeOut'}
                      justify='end'
                    >
                      <PostHeader data={post} backgroundColor='black' color='white' layout='row'/>
                    </Box>
                  </Box>
                ))
              }
            </Box>
          );
        })
      }
    </Box>
  );
};


export default Gallery;


