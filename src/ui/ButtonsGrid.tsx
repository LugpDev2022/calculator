import { MouseEventHandler } from 'react';
import { Button } from '../components';

const symbols: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  '+',
  '-',
  '/',
  'x',
  '(',
  ')',
  '=',
];

type Props = {
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonsGrid: React.FC<Props> = ({ onButtonClick }) => (
  <div className='row mt-1'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {symbols.map(symbol => {
          return (
            <Button
              key={symbol}
              buttonSymbol={symbol}
              onButtonClick={onButtonClick}
            />
          );
        })}
      </div>
    </div>
  </div>
);
