import parseOperation from '../../src/helpers/parseOperation';

describe('parseOperation function', () => {
  test('should replace "×" with "*"', () => {
    const operation = '2×3';
    const result = parseOperation(operation);
    expect(result).toBe('2*3');
  });

  test('should replace "÷" with "/"', () => {
    const operation = '10÷2';
    const result = parseOperation(operation);
    expect(result).toBe('10/2');
  });

  test('should add missing "*" between ")" and "("', () => {
    const operation = '2(3)';
    const result = parseOperation(operation);
    expect(result).toBe('2*(3)');
  });

  test('should add missing "*" between number and "("', () => {
    const operation = '2(3+4)';
    const result = parseOperation(operation);
    expect(result).toBe('2*(3+4)');
  });

  test('should add missing "*" between ")" and number', () => {
    const operation = '(3+4)2';
    const result = parseOperation(operation);
    expect(result).toBe('(3+4)*2');
  });

  test('should handle multiple replacements', () => {
    const operation = '2(3+4)÷(5-2)×4×2(1+3)';
    const result = parseOperation(operation);
    expect(result).toBe('2*(3+4)/(5-2)*4*2*(1+3)');
  });
});
