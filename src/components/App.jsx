import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Customizer from './Customizer/Customizer';
import Game from './Game/Game';

function App() {
  return (
    <div className='container-fluid d-flex flex-column p-0 min-vh-100'>
      <Header />
      <Switch>
        <Route path='/customizer' component={Customizer} />
        <Route path='/' component={Game} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
