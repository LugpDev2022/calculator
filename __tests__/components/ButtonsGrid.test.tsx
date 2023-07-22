import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ButtonsGrid from '../../src/components/ButtonsGrid';

vi.mock('../../src/components/Button', () => ({
  default: ({ keySign }) => <button>{keySign}</button>,
}));

describe('Tests on <ButtonsGrid />', () => {
  test('should match snapshot', () => {
    const { container } = render(<ButtonsGrid />);

    expect(container).toMatchSnapshot();
  });

  test('should render 20 buttons', () => {
    render(<ButtonsGrid />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(20);
  });
});
