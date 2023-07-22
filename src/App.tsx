import useTheme from './hooks/useTheme';
import ThemeSwitch from './components/ThemeSwitch';
import Screen from './components/Screen';
import ButtonsGrid from './components/ButtonsGrid';

function App() {
  const { isThemeDark, toggleTheme } = useTheme();

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

        <Screen />
        <ButtonsGrid />
      </main>
    </div>
  );
}

export default App;
