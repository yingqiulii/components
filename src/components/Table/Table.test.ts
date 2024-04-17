import { shouldHandleClick, handleClickLogic, hoverEffectLogic, changeBackgroundColor } from './Table.lib';

describe('Table lib', () => {
  describe('shouldHandleClick', () => {
    it('should return true if disabled is false', () => {
      expect(shouldHandleClick(false)).toBe(true);
    });

    it('should return false if disabled is true', () => {
      expect(shouldHandleClick(true)).toBe(false);
    });

    it('should return true if disabled is undefined', () => {
      expect(shouldHandleClick()).toBe(true);
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

    it('should call onClick even if disabled is undefined', () => {
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

    it('should return true if disabled is undefined', () => {
      expect(hoverEffectLogic()).toBe(true);
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
