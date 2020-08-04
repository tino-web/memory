import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from '@components/App/App';
import '@assets/css/style.css';
import { ContextProvider } from '@context/gameContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
