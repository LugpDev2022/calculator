import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import useTheme from '../../src/hooks/useTheme';
import shouldUseDarkTheme from '../../src/helpers/shouldUseDarkTheme';

vi.mock('../../src/helpers/shouldUseDarkTheme', () => ({
  default: vi.fn(),
}));

describe('Tests on useTheme.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  test('should return theme and toggle function', () => {
    (shouldUseDarkTheme as jest.Mock).mockReturnValue(false);

    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual({
      isThemeDark: expect.any(Boolean),
      toggleTheme: expect.any(Function),
    });
  });

  test('should call shouldUseDarkTheme()', () => {
    (shouldUseDarkTheme as jest.Mock).mockReturnValue(false);

    renderHook(() => useTheme());

    expect(shouldUseDarkTheme).toHaveBeenCalledTimes(1);
  });

  test('should set theme to dark', () => {
    localStorage.setItem('calculatorTheme', 'light');
    (shouldUseDarkTheme as jest.Mock).mockReturnValue(false);

    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(result.current.isThemeDark).toBeTruthy();
    expect(localStorage.getItem('calculatorTheme')).toBe('dark');
  });

  test('should set theme to light', () => {
    localStorage.setItem('calculatorTheme', 'dark');
    (shouldUseDarkTheme as jest.Mock).mockReturnValue(true);

    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(result.current.isThemeDark).toBeFalsy();
    expect(localStorage.getItem('calculatorTheme')).toBe('light');
  });
});
