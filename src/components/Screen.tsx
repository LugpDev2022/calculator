interface Props {
  isThemeDark: boolean;
  calcState: {
    operation: string;
    result: number;
  };
}

const Screen: React.FC<Props> = ({ isThemeDark, calcState }) => {
  const { operation, result } = calcState;

  const containerStyle = `
    ${isThemeDark ? 'bg-slate-400' : 'bg-slate-50'}
    my-5
    rounded-2xl
    w-full
    px-5
    py-2
    transition
  `;

  const operationStyle = `
    ${isThemeDark ? 'text-white/60' : 'text-amber-400/60'}
    block
    w-full
    text-right
    font-semibold
    text-sm
    sm:text-lg
    min-h-[20px]
    sm:min-h-[28px]
  `;

  const resultStyle = `
    ${isThemeDark ? 'text-white' : 'text-amber-400'}
    block
    w-full
    text-right
    text-xl
    sm:text-4xl
    font-bold
  `;

  return (
    <div className={containerStyle}>
      <span className={operationStyle}>{operation}</span>
      <span className={resultStyle}>{result.toLocaleString('en-US')}</span>
    </div>
  );
};

export default Screen;
