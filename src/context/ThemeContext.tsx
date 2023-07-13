import { Dispatch, SetStateAction, createContext } from 'react';

export type ContextValue = {
  isThemeDark: boolean;
  setIsThemeDark: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ContextValue | null>(null);
