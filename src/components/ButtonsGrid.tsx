import { Dispatch } from 'react';
import { CalcAction, CalcState } from '../calculatorReducer';
import evaluateOperation from '../helpers/evaluateOperation';
import Button from './Button';

interface Props {
  isThemeDark: boolean;
  dispatch: Dispatch<CalcAction>;
  operation: string;
}

const buttonData = [
  ['(', ')', 'DEL', 'AC'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '-'],
];

const ButtonsGrid: React.FC<Props> = ({ isThemeDark, dispatch, operation }) => {
  const handleClick = ({ target }: any) => {
    const key = target.innerHTML;

    if (key === 'DEL') return dispatch({ type: 'DELETE' });

    if (key === 'AC') return dispatch({ type: 'RESET' });

    if (key === '=') {
      const { result, error } = evaluateOperation(operation);

      if (error) return dispatch({ type: 'SET_ERROR', payload: error });

      dispatch({ type: 'SET_RESULT', payload: result });

      return;
    }

    dispatch({ type: 'SET_OPERATION', payload: key });
  };

  return (
    <div className='grid grid-cols-4 gap-2'>
      {buttonData.map((row) =>
        row.map((buttonText) => (
          <Button
            key={buttonText}
            handleClick={handleClick}
            isThemeDark={isThemeDark}
          >
            {buttonText}
          </Button>
        ))
      )}
    </div>
  );
};

export default ButtonsGrid;
