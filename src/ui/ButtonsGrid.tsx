import { NumberButton, ResultButton } from '../components';
import { numbers, operators } from '../assets';
import { OperatorButton } from '../components/buttons/OperatorButton';

export const ButtonsGrid = () => (
  <div className='row mt-1'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {numbers.map(number => {
          return <NumberButton key={number} number={number} />;
        })}
        {operators.map(operator => {
          return <OperatorButton key={operator} operator={operator} />;
        })}
        <ResultButton />
      </div>
    </div>
  </div>
);
