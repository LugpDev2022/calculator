import { MouseEventHandler } from 'react';
import { NumberButton } from '../components';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type Props = {
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonsGrid: React.FC<Props> = ({ onButtonClick }) => (
  <div className='row mt-4'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {numbers.map(number => {
          return (
            <NumberButton
              key={number}
              buttonSymbol={number}
              onButtonClick={onButtonClick}
            />
          );
        })}
      </div>
    </div>
  </div>
);
