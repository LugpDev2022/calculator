import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import formatResult from '../../src/helpers/formatResult';
import ResultDisplay from '../../src/components/ResultDisplay';

vi.mock('../../src/helpers/formatResult', () => ({
  default: vi.fn(),
}));

describe('Tests on <ResultDisplay />', () => {
  beforeEach(() => vi.clearAllMocks());

  test('should match snapshot', () => {
    (formatResult as jest.Mock).mockReturnValue('1057');

    const { container } = render(<ResultDisplay result={1057} />);

    expect(container).toMatchSnapshot();
  });

  test('should display the result', () => {
    (formatResult as jest.Mock).mockReturnValue('1057');

    render(<ResultDisplay result={1057} />);

    expect(screen.getByText('1057')).toBeTruthy();
  });

  test('should call formatResult() without error', () => {
    (formatResult as jest.Mock).mockReturnValue('1057');

    const result = 1057;

    render(<ResultDisplay result={result} />);

    expect(formatResult).toHaveBeenCalledWith(result, '');
  });

  test('should call formatResult() with the given error', () => {
    (formatResult as jest.Mock).mockReturnValue('1057');

    const result = 1057;
    const error = 'Invalid Operation';

    render(<ResultDisplay result={result} error={error} />);

    expect(formatResult).toHaveBeenCalledWith(result, error);
  });
});
