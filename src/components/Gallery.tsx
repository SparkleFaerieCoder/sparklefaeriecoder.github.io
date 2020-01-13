import React, {useState, useContext, useEffect} from 'react';
import {Image, Box, ResponsiveContext, Text} from 'grommet';

interface Image {
    src: string,
    title: string
}

interface Props {
    container?: Object,
    data: Array<Image>

}


const set = (posts: Array<Image>) => {
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

export const Gallery = (props: Props) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(() => set(props.data));
  }, [props.data]);

  const size = useContext(ResponsiveContext);
  const sizeSmall = size === 'small';

  return (
    <>
      <Box direction={sizeSmall ? 'column': 'row'}>
        {
          columns.map((column, i) => {
            const posts = column;
            return (

              <Box
                key={i}
                background={`dark-${i}`}
                width={{min: sizeSmall ? '100%': '33%', max: '100%'}}
                direction={'column'}
              >
                {
                  posts.map((post, e) => (
                    <Box
                      key={e}
                      height={getImageSize(size, e, i)}
                      width={{min: '100%', max: '100%'}}
                    >
                      <Image
                        key={e}
                        src={post.src}
                        fit={'cover'}

                      />
                    </Box>
                  ))
                }

              </Box>
            );
          })
        }
      </Box>
    </>
  );
};

export default Gallery;
