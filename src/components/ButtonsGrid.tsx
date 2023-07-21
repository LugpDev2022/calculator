import { Dispatch } from 'react';
import { CalcAction } from '../calculatorReducer';
import Button from './Button';

interface Props {
  dispatch: Dispatch<CalcAction>;
  operation: string;
}

const buttonData = [
  ['(', ')', 'DEL', 'AC'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '-'],
];

const ButtonsGrid: React.FC<Props> = ({ dispatch, operation }) => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {buttonData.map((row) =>
        row.map((buttonText) => (
          <Button
            key={buttonText}
            operation={operation}
            dispatch={dispatch}
            keySign={buttonText}
          />
        ))
      )}
    </div>
  );
};

export default ButtonsGrid;
