import React, { useContext, useState } from 'react';
import BootStrapSwitchButton from 'bootstrap-switch-button-react';
import { Context } from '../../context/gameContext';

const logoImg = require('../../assets/images/logo.png');

function GameSetup() {
  const {
    setGameStarted,
    updatePlayer,
  } = useContext(Context);

  const [playerSwitch, setPlayerSwitch] = useState(false);
  const [p1field, setP1field] = useState('');
  const [p2field, setP2field] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer('name', p1field, 1);
    updatePlayer('name', p2field, 2);
    setGameStarted(true);
  };

  const inputField = (player, get, set) => (
    <div className='row justify-content-center bg-light border border-bottom-0 border-top-0' style={{ height: '50px' }}>
      <div className='col-3 my-auto' style={{ textAlign: 'right' }}>
        {`Player ${player}:`}
      </div>
      <div className='col-6 my-auto'>
        <input type='text' value={get} className='form-control' onChange={(e) => set(e.target.value)} required />
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-center'>
          <div className='col pt-4' style={{ flex: '0 0 400px' }}>

            <div className='row pb-3'>
              <img src={logoImg.default} style={{ maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt='Memory' />
            </div>

            <div className='row justify-content-center bg-light border rounded-top border-bottom-0' style={{ height: '50px' }}>
              <div className='col-5 my-auto' style={{ textAlign: 'right' }}>
                1 Player
              </div>
              <div className='col-2 p-0 my-auto' style={{ textAlign: 'center' }}>

                <BootStrapSwitchButton onChange={(e) => setPlayerSwitch(e)} checked={playerSwitch} onlabel='1P' offlabel='2P' style='switch' onstyle='light' offstyle='light' />
              </div>
              <div className='col-5 my-auto'>
                2 Player
              </div>
            </div>

            {inputField(1, p1field, setP1field)}

            {!playerSwitch ? inputField(2, p2field, setP2field) : null}

            <div className='row justify-content-center bg-light border border-bottom-0 border-top-0' style={{ height: '50px' }}>
              <div className='col-4 my-auto' style={{ textAlign: 'right' }}>
                Scene 1
              </div>
              <div className='col-4 my-auto'>
                Scene 2
              </div>
              <div className='col-4 my-auto'>
                Scene 3
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='col-5 my-auto' style={{ textAlign: 'center' }}>
                <input type='submit' className='btn bg-warning' value='Start Game' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default GameSetup;

// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >
// https://gitbrent.github.io/bootstrap4-toggle/