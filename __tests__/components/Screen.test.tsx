import React from 'react';

import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Screen from '../../src/components/Screen';
import {
  CalcStateContext,
  CalcStateContextType,
} from '../../src/context/CalcStateContext';

vi.mock('../../src/components/ResultDisplay', () => ({
  default: () => <span>5</span>,
}));

describe('Tests on <Screen />', () => {
  const contextValue: CalcStateContextType = {
    dispatch: vi.fn(),
    error: '',
    operation: '2+2',
    result: 10,
  };

  test('should match snapshot ', () => {
    const { container } = render(
      <CalcStateContext.Provider value={contextValue}>
        <Screen />
      </CalcStateContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should show the operation', () => {
    render(
      <CalcStateContext.Provider value={contextValue}>
        <Screen />
      </CalcStateContext.Provider>
    );

    expect(screen.queryByText(contextValue.operation)).toBeTruthy();
  });

  test('should show 0 when operation not written', () => {
    render(
      <CalcStateContext.Provider value={{ ...contextValue, operation: '' }}>
        <Screen />
      </CalcStateContext.Provider>
    );

    expect(screen.queryByText(0)).toBeTruthy();
  });
});
