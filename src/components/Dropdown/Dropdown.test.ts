// Dropdown.test.ts
import { shouldToggleDropdown, toggleDropdown, selectOption, getBackgroundColor } from './Dropdown.lib';

describe('Dropdown.lib', () => {
  describe('shouldToggleDropdown', () => {
    it('returns true if not disabled', () => {
      expect(shouldToggleDropdown(false)).toBe(true);
    });

    it('returns false if disabled', () => {
      expect(shouldToggleDropdown(true)).toBe(false);
    });
  });

  describe('toggleDropdown', () => {
    it('toggles dropdown open state if not disabled', () => {
      const setIsOpenMock = jest.fn();
      toggleDropdown(false, setIsOpenMock, false);
      expect(setIsOpenMock).toHaveBeenCalledWith(true);
    });

    it('does not toggle dropdown open state if disabled', () => {
      const setIsOpenMock = jest.fn();
      toggleDropdown(false, setIsOpenMock, true);
      expect(setIsOpenMock).not.toHaveBeenCalled();
    });
  });

  describe('selectOption', () => {
    it('selects an option, calls onSelect, and closes the dropdown', () => {
      const onSelectMock = jest.fn();
      const setSelectedOptionMock = jest.fn();
      const setIsOpenMock = jest.fn();

      selectOption('Option 1', onSelectMock, setSelectedOptionMock, setIsOpenMock);

      expect(onSelectMock).toHaveBeenCalledWith('Option 1');
      expect(setSelectedOptionMock).toHaveBeenCalledWith('Option 1');
      expect(setIsOpenMock).toHaveBeenCalledWith(false);
    });
  });

  describe('getBackgroundColor', () => {
    it('returns gray background color when disabled', () => {
      const color = getBackgroundColor(true);
      expect(color).toBe('#CCCCCC');
    });

    it('returns white background color when not disabled', () => {
      const color = getBackgroundColor(false);
      expect(color).toBe('#FFFFFF');
    });
  });
});



// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Dropdown from "./Dropdown";

// test("renders dropdown button with default text", () => {
//   const { getByText } = render(
//     <Dropdown options={["Option 1", "Option 2"]} onSelect={() => {}} />,
//   );
//   const buttonElement = getByText("Select an option");
//   expect(buttonElement).toBeTruthy();
// });

// test("dropdown button opens dropdown list when clicked", () => {
//   const { getByText, getByRole } = render(
//     <Dropdown options={["Option 1", "Option 2"]} onSelect={() => {}} />,
//   );
//   const buttonElement = getByText("Select an option");
//   fireEvent.click(buttonElement);
//   const listElement = getByRole("list");
//   expect(listElement).toBeTruthy();
// });

// test("dropdown item calls onSelect when clicked", () => {
//   const mockOnSelect = jest.fn();
//   const { getByText } = render(
//     <Dropdown options={["Option 1", "Option 2"]} onSelect={mockOnSelect} />,
//   );
//   const buttonElement = getByText("Select an option");
//   fireEvent.click(buttonElement);
//   const optionElement = getByText("Option 1");
//   fireEvent.click(optionElement);
//   expect(mockOnSelect).toHaveBeenCalledWith("Option 1");
// });

// test("dropdown button text changes when an option is selected", () => {
//   const { getByText } = render(
//     <Dropdown options={["Option 1", "Option 2"]} onSelect={() => {}} />,
//   );
//   const buttonElement = getByText("Select an option");
//   fireEvent.click(buttonElement);
//   const optionElement = getByText("Option 1");
//   fireEvent.click(optionElement);
//   expect(buttonElement.textContent).toBe("Option 1");
// });
