import { Dispatch, SetStateAction } from 'react';
import Button from './Button';

type SetCalcState = Dispatch<
  SetStateAction<{
    operation: string;
    result: number;
  }>
>;

interface Props {
  isThemeDark: boolean;
  setCalcState: SetCalcState;
}

const ButtonsGrid: React.FC<Props> = ({ isThemeDark, setCalcState }) => {
  const buttonData = [
    ['(', ')', 'DEL', 'AC'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '-'],
  ];

  const handleClick = ({ target }: any) => {
    const key = target.innerHTML;

    if (key === 'DEL')
      return setCalcState((state) => ({
        ...state,
        operation: state.operation.slice(0, -1),
      }));

    if (key === 'AC') return setCalcState({ operation: '', result: 0 });

    if (key === '=')
      return setCalcState((state) => {
        console.log(Number('(2)(2)'));

        return {
          ...state,
        };
      });

    setCalcState((state) => ({
      ...state,
      operation: state.operation + key,
    }));
  };

  return (
    <div className='grid grid-cols-4 gap-2'>
      {buttonData.map((row) =>
        row.map((buttonText) => (
          <Button
            key={buttonText}
            handleClick={handleClick}
            isThemeDark={isThemeDark}
          >
            {buttonText}
          </Button>
        ))
      )}
    </div>
  );
};

export default ButtonsGrid;
