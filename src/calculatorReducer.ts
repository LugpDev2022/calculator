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
        ...state,
        operation: state.operation.slice(0, -1),
      };

    case 'SET_RESULT':
      return {
        ...state,
        result: payload,
        error: '',
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: payload,
      };

    case 'SET_OPERATION':
      return {
        ...state,
        operation: state.operation + payload,
      };

    default:
      return state;
  }
};
