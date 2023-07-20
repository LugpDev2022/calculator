import { CalcState } from '../calculatorReducer';
import ResultDisplay from './ResultDisplay';

interface Props {
  calcState: CalcState;
}

const Screen: React.FC<Props> = ({ calcState }) => {
  const { operation, result, error } = calcState;

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
      <ResultDisplay error={error} result={result} />
    </div>
  );
};

export default Screen;
