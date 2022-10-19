import { Button, ResultButton } from '../components';
import { MouseEventHandler } from 'react';
import { symbols } from '../assets/symbols';

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
        <ResultButton />
      </div>
    </div>
  </div>
);
