import { useContext } from 'react';
import { ContextValue, ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext) as ContextValue;

  return (
    <div
      className={`
        ${theme === 'dark' ? 'bg-[#0A0B0D]' : 'bg-white'}
        h-full
        w-full
        flex
        justify-center
        items-center
      `}
    >
      <main
        className={`
          ${theme === 'dark' ? 'bg-slate-800' : 'bg-yellow-200'}
          ${theme === 'dark' ? 'text-white' : 'text-amber-400'}
          w-4/5
          max-w-lg
          p-5
          rounded-2xl
        `}
      >
        Calculator
      </main>
    </div>
  );
}

export default App;
