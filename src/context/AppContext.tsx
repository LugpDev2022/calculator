import { createContext, MouseEventHandler } from 'react';

export const AppContext = createContext(
  {} as {
    onDeleteButton: MouseEventHandler<HTMLButtonElement>;
    onNumberButtonClick: MouseEventHandler<HTMLButtonElement>;
    onOperationButtonClick: MouseEventHandler<HTMLButtonElement>;
    onResultClick: MouseEventHandler<HTMLButtonElement>;
    showOnScreen: string;
  }
);
