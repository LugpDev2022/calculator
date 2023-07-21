import { Dispatch } from 'react';
import evaluateOperation from '../helpers/evaluateOperation';
import { CalcAction } from '../calculatorReducer';

interface Props {
  dispatch: Dispatch<CalcAction>;
  operation: string;
  keySign: string;
}

const Button: React.FC<Props> = ({ dispatch, operation, keySign }) => {
  const handleClick = () => {
    if (keySign === 'DEL') return dispatch({ type: 'DELETE' });

    if (keySign === 'AC') return dispatch({ type: 'RESET' });

    if (keySign === '=') {
      const { result, error } = evaluateOperation(operation);

      if (error) return dispatch({ type: 'SET_ERROR', payload: error });

      dispatch({ type: 'SET_RESULT', payload: result });

      return;
    }

    if (operation.length > 18) return;

    dispatch({ type: 'SET_OPERATION', payload: keySign });
  };

  return (
    <button
      onClick={handleClick}
      className='
        calculator-btn
        py-2
        rounded-lg
        sm:py-4
        font-bold
        text-3xl
      '
    >
      {keySign}
    </button>
  );
};

export default Button;
