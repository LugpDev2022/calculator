import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from './ThemeProvider';

export type ContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ContextValue | null>(null);
