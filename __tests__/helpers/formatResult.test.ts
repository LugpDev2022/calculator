import formatResult from '../../src/helpers/formatResult';

describe('Tests on formatResult.ts', () => {
  test('should return the error message', () => {
    const error = 'An error occurred';
    const result = formatResult(123, error);
    expect(result).toBe(error);
  });

  test('should return the number in scientific notation', () => {
    const result = formatResult(1234000000000000);
    expect(result).toBe('1.23e15');
  });

  test('should return the formatted number in en-US locale', () => {
    const result = formatResult(12345678.123456);
    expect(result).toBe('12,345,678.123');
  });
});
