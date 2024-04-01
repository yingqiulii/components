import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown button with default text', () => {
  const { getByText } = render(<Dropdown options={['Option 1', 'Option 2']} onSelect={() => {}} />);
  const buttonElement = getByText('Select an option');
  expect(buttonElement).toBeTruthy();
});

test('dropdown button opens dropdown list when clicked', () => {
  const { getByText, getByRole } = render(<Dropdown options={['Option 1', 'Option 2']} onSelect={() => {}} />);
  const buttonElement = getByText('Select an option');
  fireEvent.click(buttonElement);
  const listElement = getByRole('list');
  expect(listElement).toBeTruthy();
});

test('dropdown item calls onSelect when clicked', () => {
  const mockOnSelect = jest.fn();
  const { getByText } = render(<Dropdown options={['Option 1', 'Option 2']} onSelect={mockOnSelect} />);
  const buttonElement = getByText('Select an option');
  fireEvent.click(buttonElement);
  const optionElement = getByText('Option 1');
  fireEvent.click(optionElement);
  expect(mockOnSelect).toHaveBeenCalledWith('Option 1');
});

test('dropdown button text changes when an option is selected', () => {
  const { getByText } = render(<Dropdown options={['Option 1', 'Option 2']} onSelect={() => {}} />);
  const buttonElement = getByText('Select an option');
  fireEvent.click(buttonElement);
  const optionElement = getByText('Option 1');
  fireEvent.click(optionElement);
  expect(buttonElement.textContent).toBe('Option 1');
});

