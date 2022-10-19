import { useContext } from 'react';
import { AppContext } from '../../context';
import { StyledButton } from './StyledButton';

type Props = {
  operator: string;
};

export const OperatorButton: React.FC<Props> = ({ operator }) => {
  const { onButtonClick } = useContext(AppContext);
  return <StyledButton clickFunction={onButtonClick}>{operator}</StyledButton>;
};
