import Button from './Button';

interface Props {
  isThemeDark: boolean;
}

const ButtonsGrid: React.FC<Props> = ({ isThemeDark }) => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      <Button isThemeDark={isThemeDark}>&#40;</Button>
      <Button isThemeDark={isThemeDark}>&#41;</Button>
      <Button isThemeDark={isThemeDark}>DEL</Button>
      <Button isThemeDark={isThemeDark}>AC</Button>

      <Button isThemeDark={isThemeDark}>7</Button>
      <Button isThemeDark={isThemeDark}>8</Button>
      <Button isThemeDark={isThemeDark}>9</Button>
      <Button isThemeDark={isThemeDark}>&divide;</Button>

      <Button isThemeDark={isThemeDark}>4</Button>
      <Button isThemeDark={isThemeDark}>5</Button>
      <Button isThemeDark={isThemeDark}>6</Button>
      <Button isThemeDark={isThemeDark}>&#215;</Button>

      <Button isThemeDark={isThemeDark}>1</Button>
      <Button isThemeDark={isThemeDark}>2</Button>
      <Button isThemeDark={isThemeDark}>3</Button>
      <Button isThemeDark={isThemeDark}>+</Button>

      <Button isThemeDark={isThemeDark}>0</Button>
      <Button isThemeDark={isThemeDark}>.</Button>
      <Button isThemeDark={isThemeDark}>=</Button>
      <Button isThemeDark={isThemeDark}>-</Button>
    </div>
  );
};

export default ButtonsGrid;
