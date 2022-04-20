import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup)

const photo = [
  {
    name: 'Grocery aisle',
    category: 'commercial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  },
];

describe('PhotoList is rendered', () => {
  it('renders', () => {
    render(<PhotoList currentPhoto={photo} />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  });
});
