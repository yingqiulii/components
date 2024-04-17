import { shouldHandleClick, handleClickLogic, hoverEffectLogic, changeBackgroundColor} from './Card.lib';

describe('Card.lib', () => {
  // Test for shouldHandleClick
  describe('shouldHandleClick', () => {
    it('returns true if not disabled', () => {
      expect(shouldHandleClick(false)).toBe(true);
    });

    it('returns false if disabled', () => {
      expect(shouldHandleClick(true)).toBe(false);
    });
  });

  // Test for handleClickLogic
  describe('handleClickLogic', () => {
    it('calls onClick function if not disabled', () => {
      const mockOnClick = jest.fn();
      handleClickLogic(false, mockOnClick);
      expect(mockOnClick).toHaveBeenCalled();
    });

    it('does not call onClick function if disabled', () => {
      const mockOnClick = jest.fn();
      handleClickLogic(true, mockOnClick);
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  // Test for hoverEffectLogic
  describe('hoverEffectLogic', () => {
    it('returns true for hover effect if not disabled', () => {
      expect(hoverEffectLogic(false)).toBe(true);
    });

    it('returns false for hover effect if disabled', () => {
      expect(hoverEffectLogic(true)).toBe(false);
    });
  });
});

describe('changeBackgroundColor', () => {
  it('changes background color of element', () => {
    const div = document.createElement('div');
    div.style.backgroundColor = 'red';
    document.body.appendChild(div);

    changeBackgroundColor(div, 'green');

    expect(div.style.backgroundColor).toBe('green');
  });
});


// import React from "react";
// import { render } from "@testing-library/react";
// import Card from "./Card";
// import "@testing-library/jest-dom";

// jest.mock("./1.jpg", () => "test-file-stub");

// test("renders Card component", () => {
//   const { getByTestId, getByText } = render(
//     React.createElement(Card, { title: "Test", content: "Content" })
//   );
//   const cardElement = getByTestId("card");
//   const titleElement = getByText("Test");
//   const contentElement = getByText("Content");

//   expect(cardElement).toBeInTheDocument();
//   expect(titleElement).toBeInTheDocument();
//   expect(contentElement).toBeInTheDocument();
// });

// test("changes background color when disabled", () => {
//   const { getByTestId } = render(
//     React.createElement(Card, { title: "Test", content: "Content", disabled: true })
//   );
//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle("background-color: #eee;");
// });

// test("checks cursor and opacity styles when disabled", () => {
//   const { getByTestId } = render(
//     React.createElement(Card, { title: "Test", content: "Content", disabled: true })
//   );
//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle("cursor: not-allowed;");
//   expect(cardElement).toHaveStyle("opacity: 0.5;");
// });

// test("applies custom background color when backgroundColor prop is provided", () => {
//   const customBackgroundColor = "#ff6347";
//   const { getByTestId } = render(
//     React.createElement(Card, { title: "Test", content: "Content", backgroundColor: customBackgroundColor })
//   );
//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle(`background-color: ${customBackgroundColor};`);
// });


// import React from "react";
// import { render } from "@testing-library/react";
// import Card from "./Card";
// import "@testing-library/jest-dom";

// jest.mock("./1.jpg", () => "test-file-stub");

// test("renders Card component", () => {
//   const { getByTestId, getByText } = render(
//     <Card title="Test" content="Content" />,
//   );
//   const cardElement = getByTestId("card");
//   const titleElement = getByText("Test");
//   const contentElement = getByText("Content");

//   expect(cardElement).toBeInTheDocument();
//   expect(titleElement).toBeInTheDocument();
//   expect(contentElement).toBeInTheDocument();
// });

// test("changes background color when disabled", () => {
//   const { getByTestId } = render(
//     <Card title="Test" content="Content" disabled />,
//   );
//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle("background-color: #eee;");
// });

// test("checks cursor and opacity styles when disabled", () => {
//   const { getByTestId } = render(
//     <Card title="Test" content="Content" disabled />,
//   );
//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle("cursor: not-allowed;");
//   expect(cardElement).toHaveStyle("opacity: 0.5;");
// });

// test("applies custom background color when backgroundColor prop is provided", () => {
//   const customBackgroundColor = "#ff6347";
//   const { getByTestId } = render(
//     <Card title="Test" content="Content" backgroundColor={customBackgroundColor} />,
//   );

//   const cardElement = getByTestId("card");

//   expect(cardElement).toHaveStyle(`background-color: ${customBackgroundColor};`);
// });
