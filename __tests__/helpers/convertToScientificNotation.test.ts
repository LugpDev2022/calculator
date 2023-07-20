import convertToScientificNotation from '../../src/helpers/convertToScientificNotation';

describe('Tests on converToScientificNotation.ts', () => {
  test('should convert number to scientific notation', () => {
    const testCases = [
      { input: 1000, expectedOutput: '1.00e3' },
      { input: 0.001234, expectedOutput: '1.23e-3' },
      { input: 12345.6789, expectedOutput: '1.23e4' },
      { input: -0, expectedOutput: '0' },
      { input: -123, expectedOutput: '-1.23e2' },
      { input: -12.345, expectedOutput: '-1.23e1' },
    ];

    for (const { input, expectedOutput } of testCases) {
      const result = convertToScientificNotation(input);
      expect(result).toBe(expectedOutput);
    }
  });
});
