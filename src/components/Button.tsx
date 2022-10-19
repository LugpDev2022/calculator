import { useContext } from 'react';
import { AppContext } from '../context';

type Props = {
  buttonSymbol: string;
};

export const Button: React.FC<Props> = ({ buttonSymbol }) => {
  const { onButtonClick } = useContext(AppContext);

  return (
    <button
      onClick={onButtonClick}
      type='button'
      className='btn btn-secondary my-button mt-4 fs-5'
    >
      {buttonSymbol}
    </button>
  );
};
