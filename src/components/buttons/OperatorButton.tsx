import { useContext } from 'react';
import { AppContext } from '../../context';
import { StyledButton } from './StyledButton';

type Props = {
  operator: string;
};

export const OperatorButton: React.FC<Props> = ({ operator }) => {
  const { onOperationButtonClick } = useContext(AppContext);
  return (
    <StyledButton clickFunction={onOperationButtonClick}>
      {operator}
    </StyledButton>
  );
};
