import { Button } from './Button';

const symbols: string[] = [
  'AC',
  'DEL',
  '=',
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
];

export const ButtonsGrid = () => (
  <div className='row mt-4'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {symbols.map(number => {
          return <Button key={number} buttonSymbol={number} />;
        })}
      </div>
    </div>
  </div>
);
