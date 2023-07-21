import { useContext } from 'react';
import formatResult from '../helpers/formatResult';
import {
  CalcStateContext,
  CalcStateContextType,
} from '../context/CalcStateContext';

const ResultDisplay = () => {
  const calcState = useContext(CalcStateContext) as CalcStateContextType;
  const { result, error } = calcState;

  const displayedResult = formatResult(result, error);

  return (
    <span
      className='
        block
        font-bold
        text-2xl
        text-right
        w-full
        sm:text-4xl
      '
    >
      {displayedResult}
    </span>
  );
};

export default ResultDisplay;
