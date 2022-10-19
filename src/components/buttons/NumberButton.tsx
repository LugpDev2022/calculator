import { useContext } from 'react';
import { AppContext } from '../../context';
import { StyledButton } from './StyledButton';

type Props = {
  number: number;
};

export const NumberButton: React.FC<Props> = ({ number }) => {
  const { onNumberButtonClick } = useContext(AppContext);

  return (
    <StyledButton clickFunction={onNumberButtonClick}>{number}</StyledButton>
  );
};
