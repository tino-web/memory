import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Game from '@components/Game/Game';
import Footer from '@components/Footer/Footer';

function App() {
  return (
    <div className='container-fluid d-flex flex-column p-0 min-vh-100'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Game />
        </Route>
        <Route path='/customizer' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
