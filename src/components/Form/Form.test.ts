import { shouldSubmitForm, handleFormSubmission, getFormStyle } from './Form.lib';

describe('Form.lib', () => {
  describe('shouldSubmitForm', () => {
    it('returns true when the form is valid', () => {
      expect(shouldSubmitForm(true)).toBe(true);
    });

    it('returns false when the form is invalid', () => {
      expect(shouldSubmitForm(false)).toBe(false);
    });
  });

  describe('handleFormSubmission', () => {
    it('prevents the default form submission and submits form when valid', () => {
      const mockEvent = { preventDefault: jest.fn() } as unknown as React.FormEvent<HTMLFormElement>;
      const mockOnSubmit = jest.fn();
      handleFormSubmission(mockEvent, mockOnSubmit, true);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockOnSubmit).toHaveBeenCalledWith(mockEvent);
    });

    it('prevents the default form submission but does not submit form when invalid', () => {
      const mockEvent = { preventDefault: jest.fn() } as unknown as React.FormEvent<HTMLFormElement>;
      const mockOnSubmit = jest.fn();
      handleFormSubmission(mockEvent, mockOnSubmit, false);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe('getFormStyle', () => {
    it('returns default white background and active interaction when not disabled and no background color is provided', () => {
      const expectedStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        width: "100%",
        backgroundColor: '#FFFFFF',
        pointerEvents: 'auto'
      };
      expect(getFormStyle()).toEqual(expectedStyle);
    });

    it('returns gray background and disabled interaction when form is disabled', () => {
      const expectedStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        width: "100%",
        backgroundColor: '#CCCCCC',
        pointerEvents: 'none'
      };
      expect(getFormStyle(true)).toEqual(expectedStyle);
    });

    it('applies a custom background color when provided and form is not disabled', () => {
      const backgroundColor = '#FFCCAA';
      const expectedStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        width: "100%",
        backgroundColor: backgroundColor,
        pointerEvents: 'auto'
      };
      expect(getFormStyle(false, backgroundColor)).toEqual(expectedStyle);
    });
  });
});


// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Form } from './Form'; // Adjust the import path as needed.

// describe('Form Component', () => {
//   // Test 1: Component renders correctly
//   it('renders the form', () => {
//     const { getByTestId } = render(
//       <Form onSubmit={() => {}}>
//         <input type="text" placeholder="Test Input" />
//       </Form>
//     );
//     expect(getByTestId('my-form')).toBeInTheDocument();
//   });

//   // Test 2: Submit action
//   it('calls onSubmit when submitted', () => {
//     const mockSubmit = jest.fn();
//     const { getByTestId } = render(
//       <Form onSubmit={mockSubmit}>
//         <button type="submit">Submit</button>
//       </Form>
//     );

//     const form = getByTestId('my-form');
//     fireEvent.submit(form);
//     expect(mockSubmit).toHaveBeenCalled();
//   });

//   // Test 3: Background color is applied correctly
//   it('applies the background color when provided', () => {
//     const backgroundColor = 'lightblue';
//     const { getByTestId } = render(
//       <Form onSubmit={() => {}} backgroundColor={backgroundColor}>
//         <input type="text" placeholder="Test Input" />
//       </Form>
//     );

//     const form = getByTestId('my-form');
//     expect(form).toHaveStyle(`background-color: ${backgroundColor}`);
//   });
// });

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Form } from "./Form";
// import { Input } from "../Input";
// import '@testing-library/jest-dom';


// describe("Form Component", () => {
//   test("Form renders with input and submit button", () => {
//     render(
//       <Form onSubmit={(e) => e.preventDefault()}>
//         <Input placeholder="Name" name="name" />
//         <button type="submit">Submit</button>
//       </Form>,
//     );
//     expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
//   });

//   test("Form submission triggers onSubmit handler", () => {
//     const handleSubmit = jest.fn((e) => e.preventDefault());
//     render(
//       <Form onSubmit={handleSubmit}>
//         <Input placeholder="Name" name="name" />
//         <button type="submit">Submit</button>
//       </Form>,
//     );

//     const form = screen.getByTestId("my-form");
// fireEvent.submit(form);


//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//   });
// });
