import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './assets/css/style.css';
import { ContextProvider } from './context/gameContext';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
