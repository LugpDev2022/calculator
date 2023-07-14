export type CalcState = {
  operation: string;
  result: number;
  error: string;
};

export type CalcAction = {
  type: 'RESET' | 'DELETE' | 'SET_RESULT' | 'SET_ERROR' | 'SET_OPERATION';
  payload?: any;
};

export const calculatorReducer = (
  state: CalcState,
  { type, payload }: CalcAction
): CalcState => {
  switch (type) {
    case 'RESET':
      return { operation: '', result: 0, error: '' };

    case 'DELETE':
      return {
        result: state.result,
        operation: state.operation.slice(0, -1),
        error: '',
      };

    case 'SET_RESULT':
      return {
        operation: state.operation,
        result: payload,
        error: '',
      };

    case 'SET_ERROR':
      return {
        operation: state.operation,
        result: state.result,
        error: payload,
      };

    case 'SET_OPERATION':
      return {
        result: state.result,
        operation: state.operation + payload,
        error: '',
      };

    default:
      return state;
  }
};
