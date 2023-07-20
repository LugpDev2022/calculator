import shouldUseDarkTheme from '../../src/helpers/shouldUseDarkTheme';

describe('Tests on getTheme.ts', () => {
  test('should set dark theme on undefined', () => {
    localStorage.clear();

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
