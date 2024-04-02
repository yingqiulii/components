// import React from "react";
// import { render } from "@testing-library/react";
// import '@testing-library/jest-dom';

// import Radio from "./Radio";

// describe("Radio", () => {
//   it("renders correctly", () => {
//     const { getByText } = render(<Radio label="Radio Button" />);
//     expect(getByText("Radio Button")).toBeInTheDocument();
//   });

//   it("changes background color when disabled", () => {
//     const { getByText } = render(<Radio label="Radio Button" disabled />);
//     const radio = getByText("Radio Button");
//     expect(radio).toHaveStyle("cursor: not-allowed");
//   });
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Radio from "./Radio";

describe("Radio", () => {
  it("renders correctly", () => {
    render(<Radio label="Radio Button" />);
    expect(screen.getByLabelText("Radio Button")).toBeInTheDocument();
  });

  it("changes cursor style when disabled", () => {
    render(<Radio label="Radio Button" disabled />);
    const radioInput = screen.getByLabelText("Radio Button");
    expect(radioInput).toHaveStyle("cursor: not-allowed");
  });
});
