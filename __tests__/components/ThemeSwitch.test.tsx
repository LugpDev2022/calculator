import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ThemeSwitch from '../../src/components/ThemeSwitch';

describe('Tests on <ThemeSwitch />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<ThemeSwitch handleChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test('should call handleChange on click', () => {
    const handleChange = vi.fn();
    render(<ThemeSwitch handleChange={handleChange} />);
    const themeSwitch: any = document.getElementById('Switch-Container');
    fireEvent.click(themeSwitch);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('should display the light theme', () => {
    render(<ThemeSwitch handleChange={() => {}} />);

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeTruthy();
  });

  test('should display the dark theme', () => {
    render(<ThemeSwitch handleChange={() => {}} isThemeDark />);

    const checkbox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkbox.checked).toBeFalsy();
  });
});
