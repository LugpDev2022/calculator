import { calculatorReducer } from '../src/calculatorReducer';

describe('Tests on calculatorReducer', () => {
  const state = {
    operation: '10+5+7',
    result: 6,
    error: 'Testing Error!!!',
  };

  test('should reset state', () => {
    const newState = calculatorReducer(state, { type: 'RESET' });
    expect(newState).toEqual({ operation: '', result: 0, error: '' });
  });

  test('should delete last operation character', () => {
    const newState = calculatorReducer(state, { type: 'DELETE' });
    expect(newState).toEqual({ ...state, operation: '10+5+' });
  });

  test('should set the result', () => {
    const newResult = 22;

    const newState = calculatorReducer(state, {
      type: 'SET_RESULT',
      payload: newResult,
    });
    expect(newState).toEqual({ ...state, result: newResult, error: '' });
  });

  test('should set the error', () => {
    const errorMessage = 'Error!!!';

    const newState = calculatorReducer(state, {
      type: 'SET_ERROR',
      payload: errorMessage,
    });
    expect(newState).toEqual({ ...state, error: errorMessage });
  });

  test('should add characters to the operation', () => {
    const newState = calculatorReducer(state, {
      type: 'SET_OPERATION',
      payload: '+22',
    });
    expect(newState).toEqual({ ...state, operation: '10+5+7+22' });
  });
});
