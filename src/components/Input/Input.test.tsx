
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';
import { validate_email, validate_name, validate_message } from './Input.lib';

describe("Input Component", () => {
  test("renders with placeholder", () => {
    const placeholderText = "Enter your name";
    render(<Input name="name" placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<Input name="name" disabled />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("is not disabled when disabled prop is false", () => {
    render(<Input name="name" disabled={false} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).not.toBeDisabled();
  });
});

// Email validation tests
describe("Email Validation Tests", () => {
  test("should validate a valid email address", () => {
    expect(validate_email("example@example.com")).toBe(true);
  });

  test("should reject an invalid email address", () => {
    expect(validate_email("example.com")).toBe(false);
  });

  test("an empty string is not a valid email address", () => {
    expect(validate_email("")).toBe(false);
  });
});

// Name validation tests
describe("Name Validation Tests", () => {
  test("should validate a valid name", () => {
    expect(validate_name("John Doe")).toBe(true);
  });

  test("should reject an invalid name", () => {
    expect(validate_name("John@Doe!")).toBe(false);  // Assuming '@' is not allowed.
  });
});

// Message validation tests
describe("Message Validation Tests", () => {
  test("should validate a valid message", () => {
    expect(validate_message("Hello, world!")).toBe(true);
  });

  test("should reject a message that is too long", () => {
    const longMessage = "a".repeat(301);
    expect(validate_message(longMessage)).toBe(false);
  });
});
