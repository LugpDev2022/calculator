import { Dispatch } from 'react';
import evaluateOperation from '../helpers/evaluateOperation';
import { CalcAction } from '../calculatorReducer';
interface Props {
  isThemeDark: boolean;
  children: React.ReactNode;
  dispatch: Dispatch<CalcAction>;
  operation: string;
}

const Button: React.FC<Props> = ({
  children,
  isThemeDark,
  dispatch,
  operation,
}) => {
  const buttonStyle = `
    ${isThemeDark ? 'bg-slate-400' : 'bg-slate-50'}
    ${isThemeDark ? 'hover:bg-[#446478]' : 'hover:bg-[#DFEA68]'}
    ${isThemeDark ? 'text-white' : 'text-amber-400'}
    py-2
    rounded-lg
    sm:py-4
    font-bold
    text-3xl
    transition
  `;

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

    if (operation.length > 18) return;

    dispatch({ type: 'SET_OPERATION', payload: key });
  };

  return (
    <button onClick={handleClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
