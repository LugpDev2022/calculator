import convertToScientificNotation from '../helpers/convertToScientificNotation';

interface Props {
  error?: string;
  result: number;
  isThemeDark?: boolean;
}

const ResultDisplay: React.FC<Props> = ({ result, error, isThemeDark }) => {
  const resultStyle = `
    ${isThemeDark ? 'text-white' : 'text-amber-400'}
    block
    font-bold
    text-2xl
    text-right
    w-full
    sm:text-4xl
  `;

  const displayedResult = error
    ? error
    : Math.abs(result) >= 10000000000000
    ? convertToScientificNotation(result)
    : result.toLocaleString('en-US');

  return <span className={resultStyle}>{displayedResult}</span>;
};

export default ResultDisplay;
