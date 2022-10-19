import { NumberButton, ResultButton } from '../components';
import { numbers } from '../assets';
import { StyledButton } from '../components/buttons/StyledButton';

export const ButtonsGrid = () => (
  <div className='row mt-1'>
    <div className='col-12'>
      <div className='d-flex flex-wrap justify-content-between'>
        {numbers.map(number => {
          return <NumberButton key={number} number={number} />;
        })}
        <ResultButton />
      </div>
    </div>
  </div>
);
