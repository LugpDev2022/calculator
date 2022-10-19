import { useContext } from 'react';
import { AppContext } from '../context';

type Props = {
  number: number;
};

export const NumberButton: React.FC<Props> = ({ number }) => {
  const { onButtonClick } = useContext(AppContext);

  return (
    <button
      onClick={onButtonClick}
      type='button'
      className='btn btn-secondary my-button mt-4 fs-5'
    >
      {number}
    </button>
  );
};
