import { useContext } from 'react';
import { ContextValue, ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext) as ContextValue;

  return <h1 className='text-red-500'>Calculator</h1>;
}

export default App;
