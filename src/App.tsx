import { useReducer, useState } from 'react';

import shouldUseDarkTheme from './helpers/shouldUseDarkTheme';
import ThemeSwitch from './components/ThemeSwitch';
import Screen from './components/Screen';
import ButtonsGrid from './components/ButtonsGrid';
import { calculatorReducer } from './calculatorReducer';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(shouldUseDarkTheme());
  const [calcState, dispatch] = useReducer(calculatorReducer, {
    operation: '',
    result: 0,
    error: '',
  });

  const toggleTheme = () => {
    if (isThemeDark) {
      localStorage.setItem('calculatorTheme', 'light');
    } else {
      localStorage.setItem('calculatorTheme', 'dark');
    }
    setIsThemeDark(!isThemeDark);
  };

  return (
    <div
      className={`
        ${isThemeDark ? 'dark' : 'light'}-theme
        flex
        h-full
        items-center
        justify-center
        w-full
      `}
    >
      <main className='w-[90%] max-w-lg p-5 rounded-2xl'>
        <div className='flex justify-between items-center' id='Logo'>
          <span className='font-bold text-2xl lg:text-3xl'>LugpDev2022</span>
          <ThemeSwitch isThemeDark={isThemeDark} handleChange={toggleTheme} />
        </div>

        <Screen calcState={calcState} />
        <ButtonsGrid dispatch={dispatch} operation={calcState.operation} />
      </main>
    </div>
  );
}

export default App;
