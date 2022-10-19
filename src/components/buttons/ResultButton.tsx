import { StyledButton } from './StyledButton';

export const ResultButton = () => {
  return (
    <StyledButton clickFunction={() => console.log('Show results ')}>
      =
    </StyledButton>
  );
};
