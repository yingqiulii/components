// Dropdown.lib.ts

export const shouldToggleDropdown = (disabled?: boolean): boolean => {
  return !disabled;
};

export const toggleDropdown = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void, disabled?: boolean): void => {
  if (shouldToggleDropdown(disabled)) {
    setIsOpen(!isOpen);
  }
};

export const selectOption = (option: string, onSelect: (option: string) => void, setSelectedOption: (option: string | null) => void, setIsOpen: (isOpen: boolean) => void): void => {
  onSelect(option);
  setSelectedOption(option);
  setIsOpen(false);
};

export const getBackgroundColor = (disabled?: boolean): string => {
  return disabled ? '#CCCCCC' : '#FFFFFF'; 
};
