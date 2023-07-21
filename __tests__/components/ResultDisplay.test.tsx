import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import formatResult from '../../src/helpers/formatResult';
import ResultDisplay from '../../src/components/ResultDisplay';
import {
  CalcStateContext,
  CalcStateContextType,
} from '../../src/context/CalcStateContext';

vi.mock('../../src/helpers/formatResult', () => ({
  default: vi.fn(),
}));

describe('Tests on <ResultDisplay />', () => {
  beforeEach(() => vi.clearAllMocks());

  const contextValue: CalcStateContextType = {
    dispatch: () => {},
    error: '',
    operation: '2+2',
    result: 221057,
  };

  test('should match snapshot', () => {
    (formatResult as jest.Mock).mockReturnValue('1057');

    const { container } = render(
      <CalcStateContext.Provider value={contextValue}>
        <ResultDisplay />
      </CalcStateContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should display the result', () => {
    const mockedValue = '1057';
    (formatResult as jest.Mock).mockReturnValue(mockedValue);

    render(
      <CalcStateContext.Provider value={contextValue}>
        <ResultDisplay />
      </CalcStateContext.Provider>
    );

    expect(screen.queryByText(mockedValue)).toBeTruthy();
  });

  test('should call formatResult() without error', () => {
    const result = 1057;

    render(
      <CalcStateContext.Provider value={{ ...contextValue, result }}>
        <ResultDisplay />
      </CalcStateContext.Provider>
    );

    expect(formatResult).toHaveBeenCalledWith(result, '');
  });

  test('should call formatResult() with the given error', () => {
    const result = 1057;
    const error = 'Invalid Operation';

    render(
      <CalcStateContext.Provider value={{ ...contextValue, result, error }}>
        <ResultDisplay />
      </CalcStateContext.Provider>
    );

    expect(formatResult).toHaveBeenCalledWith(result, error);
  });
});
