import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input'; // 调整路径以匹配你的文件结构

describe('Input Component', () => {
  test('renders with placeholder', () => {
    const placeholderText = 'Enter your name';
    render(<Input name="name" placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test('is disabled when disabled prop is true', () => {
    render(<Input name="name" disabled />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });

  test('is not disabled when disabled prop is false', () => {
    render(<Input name="name" disabled={false} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toBeDisabled();
  });
});
