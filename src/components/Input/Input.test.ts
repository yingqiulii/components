import { validate_name, validate_message, validate_email, getBackgroundColor } from './Input.lib';

describe('Input Validation Functions', () => {
  describe('validate_name', () => {
    it('returns true for valid names', () => {
      expect(validate_name('John Doe')).toBe(true);
      expect(validate_name('Alice 123')).toBe(true);
    });

    it('returns false for invalid names', () => {
      expect(validate_name('')).toBe(false);
      expect(validate_name('This is a very long name that exceeds the maximum limit')).toBe(false);
      expect(validate_name('@#InvalidName')).toBe(false);
    });
  });

  describe("validate_message", () => {
    test("should validate a valid message", () => {
      expect(validate_message("Hello, world!")).toBe(true);
    });

    test("should reject a message that is too long", () => {
      const longMessage = "a".repeat(301);
      expect(validate_message(longMessage)).toBe(false);
    });
  });

  describe('validate_email', () => {
    it('returns true for valid email addresses', () => {
      expect(validate_email('test@example.com')).toBe(true);
      expect(validate_email('user123@gmail.com')).toBe(true);
    });

    it('returns false for invalid email addresses', () => {
      expect(validate_email('invalidemail')).toBe(false);
      expect(validate_email('test@example')).toBe(false);
      expect(validate_email('test@example.')).toBe(false);
      expect(validate_email('@example.com')).toBe(false);
    });
  });
});

describe('getBackgroundColor Function', () => {
  it('returns green background color for valid input', () => {
    expect(getBackgroundColor(true)).toBe('green');
  });

  it('returns red background color for invalid input', () => {
    expect(getBackgroundColor(false)).toBe('red');
  });
});

// Message validation tests

