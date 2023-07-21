import { Dispatch, createContext } from 'react';
import { CalcAction } from '../calculatorReducer';

export type CalcStateContextType = {
  operation: string;
  result: number;
  error: string;
  dispatch: Dispatch<CalcAction>;
};

export const CalcStateContext = createContext<null | CalcStateContextType>(
  null
);
