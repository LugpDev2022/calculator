import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';
import {
  CalcStateContext,
  CalcStateContextType,
} from '../../src/context/CalcStateContext';

describe('Tests on <Button />', () => {
  beforeEach(() => vi.clearAllMocks());

  const value: CalcStateContextType = {
    dispatch: vi.fn(),
    error: '',
    operation: '',
    result: 0,
  };

  test('should match snapshot', () => {
    const { container } = render(
      <CalcStateContext.Provider value={value}>
        <Button keySign='DEL' />
      </CalcStateContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should call dispatch with delete', () => {
    render(
      <CalcStateContext.Provider value={value}>
        <Button keySign='DEL' />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).toBeCalledWith({ type: 'DELETE' });
  });

  test('should call dispatch with reset', () => {
    render(
      <CalcStateContext.Provider value={value}>
        <Button keySign='AC' />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).toBeCalledWith({ type: 'RESET' });
  });

  test('should call dispatch with set error', () => {
    render(
      <CalcStateContext.Provider value={{ ...value, operation: '10+7+5)' }}>
        <Button keySign='=' />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).toBeCalledWith({
      type: 'SET_ERROR',
      payload: 'Invalid operation',
    });
  });

  test('should call dispatch with set result', () => {
    render(
      <CalcStateContext.Provider value={{ ...value, operation: '10+7+5' }}>
        <Button keySign='=' />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).toBeCalledWith({ type: 'SET_RESULT', payload: 22 });
  });

  test('should not call dispatch', () => {
    render(
      <CalcStateContext.Provider
        value={{ ...value, operation: '10+7+52+523452+2342432' }}
      >
        <Button keySign='2' />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).not.toHaveBeenCalled();
  });

  test('should call dispatch set operation', () => {
    const keySign = '2';

    render(
      <CalcStateContext.Provider value={{ ...value, operation: '10+7+5' }}>
        <Button keySign={keySign} />
      </CalcStateContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(value.dispatch).toBeCalledWith({
      type: 'SET_OPERATION',
      payload: keySign,
    });
  });
});
