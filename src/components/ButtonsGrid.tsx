import Button from './Button';

const buttonData = [
  ['(', ')', 'DEL', 'AC'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '-'],
];

const ButtonsGrid = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {buttonData.map((row) =>
        row.map((buttonText) => (
          <Button key={buttonText} keySign={buttonText} />
        ))
      )}
    </div>
  );
};

export default ButtonsGrid;
