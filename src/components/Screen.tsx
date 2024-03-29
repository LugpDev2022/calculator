import { useContext } from 'react';

import ResultDisplay from './ResultDisplay';
import {
  CalcStateContextType,
  CalcStateContext,
} from '../context/CalcStateContext';

const Screen = () => {
  const { operation } = useContext(CalcStateContext) as CalcStateContextType;

  return (
    <div
      className='
        screen-container
        my-5
        overflow-hidden
        px-5
        py-2
        rounded-2xl
        w-full
      '
    >
      <span
        className='
          operation
          block
          font-semibold
          min-h-[20px]
          text-lg
          text-right
          w-full
          sm:min-h-[28px]
          transition
        '
      >
        {operation ? operation : '0'}
      </span>
      <ResultDisplay />
    </div>
  );
};

export default Screen;
