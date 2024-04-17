import { shouldHandleClick, handleClickLogic, hoverEffectLogic, changeBackgroundColor, getBackgroundColor } from './Img.lib';

describe('Helper Functions', () => {
  describe('shouldHandleClick', () => {
    it('returns true when element is not disabled', () => {
      expect(shouldHandleClick(false)).toBe(true);
    });

    it('returns false when element is disabled', () => {
      expect(shouldHandleClick(true)).toBe(false);
    });

    it('returns true when disabled parameter is not provided (default to false)', () => {
      expect(shouldHandleClick()).toBe(true);
    });
  });

  describe('handleClickLogic', () => {
    it('calls onClick callback when element is not disabled', () => {
      const onClick = jest.fn();
      handleClickLogic(false, onClick);
      expect(onClick).toHaveBeenCalled();
    });

    it('does not call onClick callback when element is disabled', () => {
      const onClick = jest.fn();
      handleClickLogic(true, onClick);
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('hoverEffectLogic', () => {
    it('returns true when element is not disabled', () => {
      expect(hoverEffectLogic(false)).toBe(true);
    });

    it('returns false when element is disabled', () => {
      expect(hoverEffectLogic(true)).toBe(false);
    });

    it('returns true when disabled parameter is not provided (default to false)', () => {
      expect(hoverEffectLogic()).toBe(true);
    });
  });

  describe('changeBackgroundColor', () => {
    it('changes background color of element', () => {
      const element = document.createElement('div');
      changeBackgroundColor(element, '#FF0000');
      expect(getBackgroundColor(element)).toBe('rgb(255, 0, 0)');
    });
  });
});

// import React from "react";
// import { render } from "@testing-library/react";
// import Img from "./Img";
// import '@testing-library/jest-dom';


// test("renders Img component", () => {
//   const { getByAltText } = render(<Img src="1.jpg" alt="test" />);
//   const imgElement = getByAltText("test");
//   expect(imgElement).toBeInTheDocument();
// });

// test("renders disabled Img component", () => {
//   const { getByAltText } = render(<Img src="1.jpg" alt="test" disabled />);
//   const imgElement = getByAltText("test");
//   expect(imgElement).toHaveStyle("opacity: 0.5; cursor: not-allowed;");
// });
