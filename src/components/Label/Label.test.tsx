import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";
import '@testing-library/jest-dom';

describe("Label Component", () => {
  it("should render the label with default state", () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeVisible();
    expect(labelElement).not.toHaveClass("disabled");
  });

  it("should render the label with disabled state", () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText("Disabled Label");
    expect(labelElement).toBeVisible();
    expect(labelElement).toHaveClass("disabled");
    expect(labelElement).toHaveStyle("cursor: not-allowed;");
  });
});
