import { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  clickFunction: MouseEventHandler<HTMLButtonElement>;
};

export const StyledButton: React.FC<Props> = ({ children, clickFunction }) => {
  return (
    <button
      onClick={clickFunction}
      type='button'
      className='btn btn-secondary my-button mt-4 fs-5'
    >
      {children}
    </button>
  );
};
