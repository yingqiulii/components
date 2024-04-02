// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Form } from './Form';
// import { Input } from '../Input';

// describe('Form Component', () => {
//   test('Form renders with input and submit button', () => {
//     render(
//       <Form onSubmit={(e) => e.preventDefault()}>
//         <Input placeholder="Name" name="name" />
//         <button type="submit">Submit</button>
//       </Form>
//     );
//     expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
//   });

//   test('Form submission triggers onSubmit handler', () => {
//     const handleSubmit = jest.fn();
//     render(
//       <Form onSubmit={handleSubmit}>
//         <Input placeholder="Name" name="name" />
//         <button type="submit">Submit</button>
//       </Form>
//     );

//     fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//   });
// });
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./Form";
import { Input } from "../Input";
import '@testing-library/jest-dom';


describe("Form Component", () => {
  test("Form renders with input and submit button", () => {
    render(
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Name" name="name" />
        <button type="submit">Submit</button>
      </Form>,
    );
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  test("Form submission triggers onSubmit handler", () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Name" name="name" />
        <button type="submit">Submit</button>
      </Form>,
    );

    const form = screen.getByTestId("my-form");
fireEvent.submit(form);


    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
