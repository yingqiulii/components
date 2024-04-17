import { shouldHandleClick, handleClickLogic, hoverEffectLogic, changeBackgroundColor } from './Label.lib';

describe('Label library', () => {
  describe('shouldHandleClick', () => {
    it('should return true if disabled is false', () => {
      expect(shouldHandleClick(false)).toBe(true);
    });

    it('should return false if disabled is true', () => {
      expect(shouldHandleClick(true)).toBe(false);
    });

    // Test with undefined disabled
    it('should return true if disabled is undefined', () => {
      expect(shouldHandleClick(undefined)).toBe(true);
    });
  });

  describe('handleClickLogic', () => {
    it('should call onClick if not disabled', () => {
      const onClickMock = jest.fn();
      handleClickLogic(false, onClickMock);
      expect(onClickMock).toHaveBeenCalled();
    });

    it('should not call onClick if disabled', () => {
      const onClickMock = jest.fn();
      handleClickLogic(true, onClickMock);
      expect(onClickMock).not.toHaveBeenCalled();
    });

    // Test with undefined disabled
    it('should call onClick if disabled is undefined', () => {
      const onClickMock = jest.fn();
      handleClickLogic(undefined, onClickMock);
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe('hoverEffectLogic', () => {
    it('should return true if not disabled', () => {
      expect(hoverEffectLogic(false)).toBe(true);
    });

    it('should return false if disabled', () => {
      expect(hoverEffectLogic(true)).toBe(false);
    });

    // Test with undefined disabled
    it('should return true if disabled is undefined', () => {
      expect(hoverEffectLogic(undefined)).toBe(true);
    });
  });

  describe('changeBackgroundColor', () => {
    it('should change the background color of the element', () => {
      const element = document.createElement('div');
      changeBackgroundColor(element, 'red');
      expect(element.style.backgroundColor).toBe('red');
    });

    // Test with another color
    it('should change the background color of the element to blue', () => {
      const element = document.createElement('div');
      changeBackgroundColor(element, 'blue');
      expect(element.style.backgroundColor).toBe('blue');
    });
  });
});
