import React from "react";
import { render } from "@testing-library/react";
import Radio from "./Radio";

describe("Radio", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Radio label="Radio Button" />);
    expect(getByText("Radio Button")).toBeInTheDocument();
  });

  it("changes background color when disabled", () => {
    const { getByText } = render(<Radio label="Radio Button" disabled />);
    const radio = getByText("Radio Button");
    expect(radio).toHaveStyle("cursor: not-allowed");
  });
});
