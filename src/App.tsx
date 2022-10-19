import { ButtonsGrid } from './ui';
import { Screen } from './components';
import './App.css';

function App() {
  return (
    <div className='container mb-4'>
      <header className='row'>
        <h1 className='col-12 text-center mt-4'>Calculator App</h1>
      </header>

      <div className='row justify-content-center mt-5'>
        <div className='col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4 bg-dark rounded-3'>
          <div className='container px-3 py-4'>
            <Screen />
            <ButtonsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
