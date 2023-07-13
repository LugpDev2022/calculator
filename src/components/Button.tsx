interface Props {
  isThemeDark: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, isThemeDark }) => {
  return (
    <button
      onClick={() => console.log('click')}
      className={`
        ${isThemeDark ? 'bg-slate-400' : 'bg-slate-50'}
        ${isThemeDark ? 'hover:bg-[#446478]' : 'hover:bg-[#DFEA68]'}
        ${isThemeDark ? 'text-white' : 'text-amber-400'}
        py-2
        rounded-lg
        sm:py-4
        font-bold
        text-3xl
        transition
      `}
    >
      {children}
    </button>
  );
};

export default Button;
