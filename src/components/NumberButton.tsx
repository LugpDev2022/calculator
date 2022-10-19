import { MouseEventHandler } from 'react';

type Props = {
  buttonSymbol: number;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const NumberButton: React.FC<Props> = ({
  buttonSymbol,
  onButtonClick,
}) => {
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
