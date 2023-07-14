import { useReducer, useState } from 'react';

import ThemeSwitch from './components/ThemeSwitch';
import Screen from './components/Screen';
import ButtonsGrid from './components/ButtonsGrid';
import { calculatorReducer } from './calculatorReducer';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true);
  const [calcState, dispatch] = useReducer(calculatorReducer, {
    operation: '',
    result: 0,
    error: '',
  });

  const backgroundColor = isThemeDark ? 'bg-[#0A0B0D]' : 'bg-white';
  const mainBackgroundColor = isThemeDark ? 'bg-slate-800' : 'bg-yellow-200';
  const logoColor = isThemeDark ? 'text-[#91C4D9]' : 'text-amber-400';

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <div
      className={`${backgroundColor} h-full w-full flex justify-center items-center transition`}
    >
      <main
        className={`${mainBackgroundColor} w-[90%] max-w-lg p-5 rounded-2xl transition`}
      >
        <div
          className={`flex justify-between items-center ${logoColor} transition`}
        >
          <span className='font-bold text-lg sm:text-2xl lg:text-3xl'>
            LugpDev2022
          </span>
          <ThemeSwitch isThemeDark={isThemeDark} handleChange={toggleTheme} />
        </div>

        <Screen isThemeDark={isThemeDark} calcState={calcState} />
        <ButtonsGrid
          isThemeDark={isThemeDark}
          dispatch={dispatch}
          operation={calcState.operation}
        />
      </main>
    </div>
  );
}

export default App;
