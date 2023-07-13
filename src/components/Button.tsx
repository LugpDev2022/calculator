interface Props {
  isThemeDark: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, isThemeDark }) => {
  const buttonStyle = `
    bg-${isThemeDark ? 'slate-400' : 'slate-50'}
    hover:bg-${isThemeDark ? '[#446478]' : '[#DFEA68]'}
    text-${isThemeDark ? 'white' : 'amber-400'}
    py-2
    rounded-lg
    sm:py-4
    font-bold
    text-3xl
    transition
  `;

  const handleClick = () => {
    console.log('click');
  };

  return (
    <button onClick={handleClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
