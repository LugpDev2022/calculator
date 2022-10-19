import { useState } from 'react';
import { ButtonsGrid } from './ui';
import { Screen } from './components';
import './App.css';

function App() {
  const [showOnScreen, setShowOnScreen] = useState('0');

  const onButtonClick = ({ target }: any) => {
    setShowOnScreen(value => value + target.innerHTML);
  };

  return (
    <div className='container'>
      <header className='row'>
        <h1 className='col-12 text-center mt-4'>Calculator App</h1>
      </header>

      <div className='row justify-content-center mt-5'>
        <div className='col-11 col-sm-10 col-md-8 col-lg-6 bg-dark rounded-3'>
          <div className='container p-3'>
            <Screen showOnScreen={showOnScreen} />

            <ButtonsGrid onButtonClick={onButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
