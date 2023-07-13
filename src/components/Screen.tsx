interface Props {
  isThemeDark: boolean;
}

const Screen: React.FC<Props> = ({ isThemeDark }) => {
  const operation = '(5+7)x2021';
  const result = '24,252';

  return (
    <div
      className={`
        ${isThemeDark ? 'bg-slate-400' : 'bg-slate-50'}
        my-5
        rounded-2xl
        w-full
        px-5
        py-2
      `}
    >
      <span
        className={`
          ${isThemeDark ? 'text-white/60' : 'text-amber-400/60'}
          transition
          block
          w-full
          text-right
          font-semibold
          text-sm
          sm:text-lg
        `}
      >
        {operation}
      </span>
      <span
        className={`
          block
          w-full
          text-right
          text-xl
          sm:text-4xl
          font-bold
        `}
      >
        {result}
      </span>
    </div>
  );
};

export default Screen;
