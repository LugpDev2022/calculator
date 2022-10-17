type Props = {
  buttonSymbol: number;
};

export const Button: React.FC<Props> = ({ buttonSymbol }) => {
  return (
    <button type='button' className='btn btn-secondary my-button mt-4'>
      <span className='fs-5'>{buttonSymbol}</span>
    </button>
  );
};
