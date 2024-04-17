import { shouldHandleClick, handleClickLogic, hoverEffectLogic, changeBackgroundColor } from './Text.lib';

describe('Text lib', () => {
  describe('shouldHandleClick', () => {
    it('should return true if disabled is false', () => {
      expect(shouldHandleClick(false)).toBe(true);
    });

    it('should return false if disabled is true', () => {
      expect(shouldHandleClick(true)).toBe(false);
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
  });

  describe('hoverEffectLogic', () => {
    it('should return true if not disabled', () => {
      expect(hoverEffectLogic(false)).toBe(true);
    });

    it('should return false if disabled', () => {
      expect(hoverEffectLogic(true)).toBe(false);
    });
  });

  describe('changeBackgroundColor', () => {
    it('should change background color of element', () => {
      const element = document.createElement('div');
      changeBackgroundColor(element, 'red');
      expect(element.style.backgroundColor).toBe('red');
    });
  });
});
