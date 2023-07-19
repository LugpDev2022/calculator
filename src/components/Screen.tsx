import { CalcState } from '../calculatorReducer';
import ResultDisplay from './ResultDisplay';

interface Props {
  isThemeDark?: boolean;
  calcState: CalcState;
}

const Screen: React.FC<Props> = ({ isThemeDark, calcState }) => {
  const { operation, result, error } = calcState;

  const containerStyle = `
    ${isThemeDark ? 'bg-slate-400' : 'bg-slate-50'}
    my-5
    overflow-hidden
    px-5
    py-2
    rounded-2xl
    transition
    w-full
  `;

  const operationStyle = `
    ${isThemeDark ? 'text-white/60' : 'text-amber-400/60'}
    block
    font-semibold
    min-h-[20px]
    text-lg
    text-right
    w-full
    sm:min-h-[28px]
  `;

  return (
    <div className={containerStyle}>
      <span className={operationStyle}>{operation ? operation : '0'}</span>
      <ResultDisplay error={error} isThemeDark={isThemeDark} result={result} />
    </div>
  );
};

export default Screen;
