import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("renders button with text", () => {
  render(React.createElement(Button, { text: "Click me" }));
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick prop when clicked", () => {
  const onClick = jest.fn();
  render(React.createElement(Button, { text: "Click me", onClick }));
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalled();
});

test("button is disabled when disabled prop is true", () => {
  render(React.createElement(Button, { text: "Click me", disabled: true }));
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeDisabled();
});

test("button changes background color when disabled", () => {
  render(React.createElement(Button, { text: "Click me", disabled: true }));
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toHaveStyle({
    backgroundColor: expect.stringMatching(/rgb\(108,\s*117,\s*125\)/),
  });
});

test("button uses custom background color when backgroundColor prop is provided", () => {
  const customColor = "#ff6347";
  render(React.createElement(Button, { text: "Click me", backgroundColor: customColor }));
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toHaveStyle(`background-color: ${customColor}`);
});


// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Button from "./Button";
// import "@testing-library/jest-dom";

// test("renders button with text", () => {
//   render(<Button text="Click me" />);
//   const buttonElement = screen.getByText(/click me/i);
//   expect(buttonElement).toBeInTheDocument();
// });

// test("calls onClick prop when clicked", () => {
//   const onClick = jest.fn();
//   render(<Button text="Click me" onClick={onClick} />);
//   const buttonElement = screen.getByText(/click me/i);
//   fireEvent.click(buttonElement);
//   expect(onClick).toHaveBeenCalled();
// });

// test("button is disabled when disabled prop is true", () => {
//   render(<Button text="Click me" disabled />);
//   const buttonElement = screen.getByText(/click me/i);
//   expect(buttonElement).toBeDisabled();
// });

// test("button changes background color when disabled", () => {
//   render(<Button text="Click me" disabled />);
//   const buttonElement = screen.getByText(/click me/i);
//   expect(buttonElement).toHaveStyle({
//     backgroundColor: expect.stringMatching(/rgb\(108,\s*117,\s*125\)/),
//   });
// });

// test("button uses custom background color when backgroundColor prop is provided", () => {
//   const customColor = "#ff6347";
//   render(<Button text="Click me" backgroundColor={customColor} />);
//   const buttonElement = screen.getByText(/click me/i);
//   expect(buttonElement).toHaveStyle(`background-color: ${customColor}`);
// });