import { useContext } from 'react';
import { AppContext } from '../../context';
import { StyledButton } from './StyledButton';

export const ResultButton = () => {
  const { onResultClick } = useContext(AppContext);

  return <StyledButton clickFunction={onResultClick}>=</StyledButton>;
};
