import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../../Contact';
afterEach(cleanup);

describe('Contact Renders', () => {
  it('renders Contact', () => {
    render(<ContactForm></ContactForm>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
