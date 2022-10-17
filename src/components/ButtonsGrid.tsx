import { Button } from './NumberButton';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const ButtonsGrid = () => (
  <div className='row mt-4'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {numbers.map(number => {
          return <Button key={number} buttonSymbol={number} />;
        })}
      </div>
    </div>
  </div>
);
