import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import CalcStateProvider from './context/CalcStateProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalcStateProvider>
      <App />
    </CalcStateProvider>
  </React.StrictMode>
);
