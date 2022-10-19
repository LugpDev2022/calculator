import { Button, ResultButton } from '../components';
import { symbols } from '../assets/symbols';

export const ButtonsGrid = () => (
  <div className='row mt-1'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {symbols.map(symbol => {
          return <Button key={symbol} buttonSymbol={symbol} />;
        })}
        <ResultButton />
      </div>
    </div>
  </div>
);
