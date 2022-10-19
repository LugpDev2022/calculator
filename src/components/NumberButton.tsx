import { MouseEventHandler } from 'react';

type Props = {
  buttonSymbol: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({ buttonSymbol, onButtonClick }) => {
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
