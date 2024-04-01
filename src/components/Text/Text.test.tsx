import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text', () => {
  render(<Text text="Hello World" />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});

test('text is visible', () => {
  render(<Text text="Hello World" />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeVisible();
});

test('text is greyed out and not clickable when disabled', () => {
  render(<Text text="Hello World" disabled />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toHaveStyle({ color: '#ccc', cursor: 'not-allowed' });
});

test('text color changes to grey when disabled', () => {
  render(<Text text="Hello World" disabled />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toHaveStyle({ color: '#ccc' });
});
