import React from 'react';
import { render, screen } from '@testing-library/react';
import CalcStateProvider from '../../src/context/CalcStateProvider';

describe('Tests on <CalcStateProvider />', () => {
  test('should render children', () => {
    const text = 'children';

    render(
      <CalcStateProvider>
        <div>{text}</div>
      </CalcStateProvider>
    );

    expect(screen.queryByText(text)).toBeTruthy();
  });
});
