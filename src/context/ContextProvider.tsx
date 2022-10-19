import { useState } from 'react';
import { AppContext } from './';

type Props = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [showOnScreen, setShowOnScreen] = useState('0');
  const [isLastAResult, setIsLastAResult] = useState(false);

  const onNumberButtonClick = ({ target }: any) => {
    if (showOnScreen === '0' || isLastAResult) {
      setShowOnScreen(target.innerHTML);
      setIsLastAResult(false);
      return;
    }

    if (showOnScreen.length < 20) {
      setShowOnScreen(value => value + target.innerHTML);
      setIsLastAResult(false);
      return;
    }
  };

  const onOperationButtonClick = ({ target }: any) => {
    if (showOnScreen.length < 19) {
      setShowOnScreen(value => value + target.innerHTML);
      setIsLastAResult(false);
    }
  };

  const onResultClick = () => {
    setShowOnScreen(eval(showOnScreen).toString());
    setIsLastAResult(true);
  };

  const onDeleteButton = () => {
    if (showOnScreen.length === 1 || isLastAResult) {
      setShowOnScreen('0');
      setIsLastAResult(false);
      return;
    }

    setShowOnScreen(showOnScreen.substring(0, showOnScreen.length - 1));
  };

  return (
    <AppContext.Provider
      value={{
        onDeleteButton,
        onNumberButtonClick,
        onOperationButtonClick,
        onResultClick,
        showOnScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
