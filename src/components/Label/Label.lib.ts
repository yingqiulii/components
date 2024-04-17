export const shouldHandleClick = (disabled?: boolean): boolean => {
  return !disabled;
};

export const handleClickLogic = (disabled?: boolean, onClick?: () => void) => {
  if (shouldHandleClick(disabled)) {
    onClick?.();
  }
};

export const hoverEffectLogic = (disabled?: boolean) => {
  return shouldHandleClick(disabled);
};

export function changeBackgroundColor(element: HTMLElement, color: string): void {
  element.style.backgroundColor = color;
}
