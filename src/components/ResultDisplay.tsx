import convertToScientificNotation from '../helpers/convertToScientificNotation';

interface Props {
  error?: string;
  result: number;
}

const ResultDisplay: React.FC<Props> = ({ result, error }) => {
  const displayedResult = error
    ? error
    : Math.abs(result) >= 10000000000000 && isFinite(result)
    ? convertToScientificNotation(result)
    : result.toLocaleString('en-US');

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
