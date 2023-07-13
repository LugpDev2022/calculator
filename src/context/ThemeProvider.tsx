import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isThemeDark, setIsThemeDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
