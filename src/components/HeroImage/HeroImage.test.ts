import { getBackgroundColor } from './HeroImage.lib';
import {
  shouldDisplayImage,
  shouldDisplayText,
  getOverlayOpacity,
  getTextOpacity,
  getTextColor,
  getCursorStyle,
} from './HeroImage.lib';

describe('HeroImageLib', () => {
  describe('shouldDisplayImage', () => {
    it('should return true if disabled is false', () => {
      expect(shouldDisplayImage({
        disabled: false,
        backgroundColor: undefined
      })).toBe(true);
    });

    it('should return false if disabled is true', () => {
      expect(shouldDisplayImage({
        disabled: true,
        backgroundColor: undefined
      })).toBe(false);
    });
  });

  describe('shouldDisplayText', () => {
    it('should return true if disabled is false', () => {
      expect(shouldDisplayText({
        disabled: false,
        backgroundColor: undefined
      })).toBe(true);
    });

    it('should return false if disabled is true', () => {
      expect(shouldDisplayText({
        disabled: true,
        backgroundColor: undefined
      })).toBe(false);
    });
  });

  describe('getOverlayOpacity', () => {
    it('should return 0.5 if disabled is true', () => {
      expect(getOverlayOpacity({
        disabled: true,
        backgroundColor: undefined
      })).toBe(0.5);
    });

    it('should return 0 if disabled is false', () => {
      expect(getOverlayOpacity({
        disabled: false,
        backgroundColor: undefined
      })).toBe(0);
    });
  });

  describe('getTextOpacity', () => {
    it('should return 0.5 if disabled is true', () => {
      expect(getTextOpacity({
        disabled: true,
        backgroundColor: undefined
      })).toBe(0.5);
    });

    it('should return 1 if disabled is false', () => {
      expect(getTextOpacity({
        disabled: false,
        backgroundColor: undefined
      })).toBe(1);
    });
  });

  describe('getTextColor', () => {
    it('should return "#aaa" if disabled is true', () => {
      expect(getTextColor({
        disabled: true,
        backgroundColor: undefined
      })).toBe('#aaa');
    });

    it('should return "white" if disabled is false', () => {
      expect(getTextColor({
        disabled: false,
        backgroundColor: undefined
      })).toBe('white');
    });
  });

  describe('getCursorStyle', () => {
    it('should return "not-allowed" if disabled is true', () => {
      expect(getCursorStyle({
        disabled: true,
        backgroundColor: undefined
      })).toBe('not-allowed');
    });

    it('should return "pointer" if disabled is false', () => {
      expect(getCursorStyle({
        disabled: false,
        backgroundColor: undefined
      })).toBe('pointer');
    });
  });

  describe('getBackgroundColor', () => {
    it('should return specified background color if provided', () => {
      expect(getBackgroundColor({ disabled: false, backgroundColor: 'red' })).toBe('red');
    });

    it('should return undefined if no background color is provided', () => {
      expect(getBackgroundColor({
        disabled: false,
        backgroundColor: undefined
      })).toBeUndefined();
    });
  });
})