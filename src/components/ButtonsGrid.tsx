import Button from './Button';

interface Props {
  isThemeDark: boolean;
}

const ButtonsGrid: React.FC<Props> = ({ isThemeDark }) => {
  const buttonData = [
    ['(', ')', 'DEL', 'AC'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '+'],
    ['0', '00', '.', '-'],
  ];

  return (
    <div className='grid grid-cols-4 gap-2'>
      {buttonData.map((row) =>
        row.map((buttonText) => (
          <Button key={buttonText} isThemeDark={isThemeDark}>
            {buttonText}
          </Button>
        ))
      )}
    </div>
  );
};

export default ButtonsGrid;
