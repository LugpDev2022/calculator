import { useContext } from 'react';
import { ContextValue, ThemeContext } from './context/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  const { isThemeDark } = useContext(ThemeContext) as ContextValue;

  return (
    <div
      className={`
        ${isThemeDark ? 'bg-[#0A0B0D]' : 'bg-white'}
        h-full
        w-full
        flex
        justify-center
        items-center
        transition
      `}
    >
      <main
        className={`
          ${isThemeDark ? 'bg-slate-800' : 'bg-yellow-200'}
          ${isThemeDark ? 'text-white' : 'text-amber-400'}
          w-4/5
          max-w-lg
          p-5
          rounded-2xl
          transition
        `}
      >
        <div
          className={`
            ${isThemeDark ? 'text-[#91C4D9]' : 'text-amber-400'}
            flex
            justify-between
            transition
            items-center
          `}
        >
          <span className='font-bold text-lg md:text-2xl lg:text-3xl'>
            LugpDev2022
          </span>

          <ThemeSwitch />
        </div>
      </main>
    </div>
  );
}

export default App;
