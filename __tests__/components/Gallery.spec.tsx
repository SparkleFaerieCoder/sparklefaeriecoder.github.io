import React from 'react';
import Gallery from '../../src/components/Gallery';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const posts = [
    {
      id: '123',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
    {
      id: '456',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
    {
      id: '789',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
    {
      id: '1011',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
    {
      id: '1213',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
    {
      id: '1415',
      src: '//v2.grommet.io/assets/IMG_4245.jpg',
      title: 'Lorem ipsum dolor sit',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vel dolores voluptatem repudiandae voluptates voluptate cupiditate
       explicabo omnis et, blanditiis, iure autem, sint laborum. 
       Reiciendis in animi non, sed cumque minima?`,
      createdOn: new Date(),
      url: '#',
    },
  ];

  const component = renderer.create(<Gallery data={posts}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log('tree', tree);
  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
