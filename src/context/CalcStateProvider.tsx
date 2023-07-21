import { useReducer } from 'react';
import { CalcStateContext } from './CalcStateContext';
import { calculatorReducer } from '../calculatorReducer';

interface Props {
  children: React.ReactNode;
}

const CalcStateProvider: React.FC<Props> = ({ children }) => {
  const [calcState, dispatch] = useReducer(calculatorReducer, {
    operation: '',
    result: 0,
    error: '',
  });

  return (
    <CalcStateContext.Provider value={{ ...calcState, dispatch }}>
      {children}
    </CalcStateContext.Provider>
  );
};

export default CalcStateProvider;
