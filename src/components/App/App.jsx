import React from 'react';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='container-fluid d-flex flex-column p-0 min-vh-100'>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
