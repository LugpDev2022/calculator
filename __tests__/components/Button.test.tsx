import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('Tests on <Button />', () => {
  beforeEach(() => vi.clearAllMocks());

  test('should match snapshot', () => {
    const { container } = render(
      <Button dispatch={() => {}} keySign='DEL' operation='2+2' />
    );

    expect(container).toMatchSnapshot();
  });

  test('should call dispatch with delete', () => {
    const dispatchMock = vi.fn();

    render(<Button dispatch={dispatchMock} keySign='DEL' operation='2+2' />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).toBeCalledWith({ type: 'DELETE' });
  });

  test('should call dispatch with reset', () => {
    const dispatchMock = vi.fn();

    render(<Button dispatch={dispatchMock} keySign='AC' operation='2+2' />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).toBeCalledWith({ type: 'RESET' });
  });

  test('should call dispatch with set error on invalid operation', () => {
    const dispatchMock = vi.fn();

    render(<Button dispatch={dispatchMock} keySign='=' operation='10+7+5(' />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).toBeCalledWith({
      type: 'SET_ERROR',
      payload: 'Invalid operation',
    });
  });

  test('should call dispatch with set result', () => {
    const dispatchMock = vi.fn();

    render(<Button dispatch={dispatchMock} keySign='=' operation='10+7+5' />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).toBeCalledWith({ type: 'SET_RESULT', payload: 22 });
  });

  test('should call dispatch set operation', () => {
    const dispatchMock = vi.fn();

    render(
      <Button
        dispatch={dispatchMock}
        keySign='2'
        operation='10+7+52+523452+2342432'
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).not.toHaveBeenCalled();
  });

  test('should call dispatch set operation', () => {
    const keySign = '2';
    const dispatchMock = vi.fn();

    render(
      <Button dispatch={dispatchMock} keySign={keySign} operation='10+7+5' />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchMock).toBeCalledWith({
      type: 'SET_OPERATION',
      payload: keySign,
    });
  });
});
