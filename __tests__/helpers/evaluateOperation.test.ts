import evaluateOperation from '../../src/helpers/evaluateOperation';

describe('Tests on evaluateOperation.ts', () => {
  test('should evaluate a valid operation', () => {
    const response = evaluateOperation('2 + 3 * 4');
    expect(response.result).toBe(14);
    expect(response.error).toBe('');
  });

  test('should handle invalid operations', () => {
    const response = evaluateOperation('2 + * 3');
    expect(response.result).toBe(null);
    expect(response.error).toBe('Invalid operation');
  });

  test('should handle divide by zero', () => {
    const response = evaluateOperation('5 / 0');
    expect(response.result).toBe(Infinity);
    expect(response.error).toBe('');
  });
});
