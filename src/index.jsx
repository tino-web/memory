import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { GameContextProvider } from './context/gameContext';
import { TilesContextProvider } from './context/tilesContext';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <GameContextProvider>
        <TilesContextProvider>
          <App />
        </TilesContextProvider>
      </GameContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
