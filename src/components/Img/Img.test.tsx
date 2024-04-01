import React from 'react';
import { render } from '@testing-library/react';
import Img from './Img';

test('renders Img component', () => {
  const { getByAltText } = render(<Img src="1.jpg" alt="test" />);
  const imgElement = getByAltText('test');
  expect(imgElement).toBeInTheDocument();
});

test('renders disabled Img component', () => {
  const { getByAltText } = render(<Img src="1.jpg" alt="test" disabled />);
  const imgElement = getByAltText('test');
  expect(imgElement).toHaveStyle('opacity: 0.5; cursor: not-allowed;');
});
