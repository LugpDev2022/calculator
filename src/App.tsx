import { useState } from 'react';

import ThemeSwitch from './components/ThemeSwitch';
import Screen from './components/Screen';
import ButtonsGrid from './components/ButtonsGrid';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const backgroundColor = isThemeDark ? '[#0A0B0D]' : 'white';
  const mainBackgroundColor = isThemeDark ? 'slate-800' : 'yellow-200';
  const logoColor = isThemeDark ? '[#91C4D9]' : 'amber-400';

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <div
      className={`bg-${backgroundColor} h-full w-full flex justify-center items-center transition`}
    >
      <main
        className={`bg-${mainBackgroundColor} w-[90%] max-w-lg p-5 rounded-2xl transition`}
      >
        <div
          className={`flex justify-between items-center text-${logoColor} transition`}
        >
          <span className='font-bold text-lg sm:text-2xl lg:text-3xl'>
            LugpDev2022
          </span>
          <ThemeSwitch isThemeDark={isThemeDark} handleChange={toggleTheme} />
        </div>
        <Screen isThemeDark={isThemeDark} />
        <ButtonsGrid isThemeDark={isThemeDark} />
      </main>
    </div>
  );
}

export default App;
