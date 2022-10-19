import { useState } from 'react';
import { AppContext } from './';

type Props = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [showOnScreen, setShowOnScreen] = useState('0');

  const onButtonClick = ({ target }: any) => {
    if (showOnScreen === '0') {
      setShowOnScreen(target.innerHTML);
      return;
    }

    setShowOnScreen(value => value + target.innerHTML);
  };

  const onDeleteButton = () => {
    if (showOnScreen.length === 1) {
      setShowOnScreen('0');
      return;
    }

    setShowOnScreen(showOnScreen.substring(0, showOnScreen.length - 1));
  };

  return (
    <AppContext.Provider
      value={{ onButtonClick, showOnScreen, onDeleteButton }}
    >
      {children}
    </AppContext.Provider>
  );
};
