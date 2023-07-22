import { useState } from 'react';
import shouldUseDarkTheme from '../helpers/shouldUseDarkTheme';

const useTheme = () => {
  const [isThemeDark, setIsThemeDark] = useState(shouldUseDarkTheme());

  const toggleTheme = () => {
    if (isThemeDark) {
      localStorage.setItem('calculatorTheme', 'light');
    } else {
      localStorage.setItem('calculatorTheme', 'dark');
    }
    setIsThemeDark(!isThemeDark);
  };

  return { isThemeDark, toggleTheme };
};

export default useTheme;
