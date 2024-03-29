import shouldUseDarkTheme from '../../src/helpers/shouldUseDarkTheme';

describe('Tests on shouldUseDarkTheme.ts', () => {
  beforeEach(() => localStorage.clear());

  test('should set dark theme on undefined', () => {
    const result = shouldUseDarkTheme();
    expect(result).toBeTruthy();
  });

  test('should return true on dark theme', () => {
    localStorage.setItem('calculatorTheme', 'dark');

    const result = shouldUseDarkTheme();
    expect(result).toBeTruthy();
  });

  test('should return false on light theme', () => {
    localStorage.setItem('calculatorTheme', 'light');

    const result = shouldUseDarkTheme();
    expect(result).toBeFalsy();
  });
});
