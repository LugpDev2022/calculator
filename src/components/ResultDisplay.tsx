import formatResult from '../helpers/formatResult';

interface Props {
  error?: string;
  result: number;
}

const ResultDisplay: React.FC<Props> = ({ result, error = '' }) => {
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
