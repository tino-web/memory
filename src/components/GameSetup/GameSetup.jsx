import React, { useContext, useState } from 'react';
import BootStrapSwitchButton from 'bootstrap-switch-button-react';
import { Context } from '../../context/gameContext';
import logoImg from '../../assets/images/logo.png';
import card1Img from '../../assets/images/tile-bg/setup_1.png';
import card2Img from '../../assets/images/tile-bg/setup_2.png';
import card3Img from '../../assets/images/tile-bg/setup_3.png';

function GameSetup() {
  const {
    setGameStarted,
    updatePlayer,
    setTileBg,
    setPlayerNumber,
  } = useContext(Context);

  const [playerSwitch, setPlayerSwitch] = useState(false);
  const [p1field, setP1field] = useState('');
  const [p2field, setP2field] = useState('');
  const [cardBg, setCardBg] = useState('card1');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer('name', p1field, 1);
    if (playerSwitch) {
      setPlayerNumber(1);
    } else {
      setPlayerNumber(2);
      updatePlayer('name', p2field, 2);
    }
    setTileBg(cardBg);
    setGameStarted(true);
  };

  const inputField = (player, get, set, switcher) => (
    <div className={`row justify-content-center bg-light border border-bottom-0 border-top-0 showRow ${switcher ? 'hideRow' : ''}`} style={{ height: '50px' }}>
      <div className='col-3 my-auto' style={{ textAlign: 'right' }}>
        {`Player ${player}:`}
      </div>
      <div className='col-6 my-auto'>
        <input type='text' value={get} className='form-control' onChange={(e) => set(e.target.value)} placeholder='Enter name' required={!switcher} />
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-center'>
          <div className='col pt-4' style={{ flex: '0 0 400px' }}>

            <div className='row pb-3'>
              <img src={logoImg} style={{ maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt='Memory' />
            </div>

            <div className='row justify-content-center bg-light border rounded-top border-bottom-0' style={{ height: '70px', paddingTop: '20px' }}>
              <div className='col-5 my-auto' style={{ textAlign: 'right' }}>
                1 Player
              </div>
              <div className='col-2 p-0 my-auto' style={{ textAlign: 'center' }}>

                {/* eslint-disable-next-line react/style-prop-object */}
                <BootStrapSwitchButton onChange={(e) => setPlayerSwitch(e)} checked={playerSwitch} onlabel='1P' offlabel='2P' style='switch' onstyle='light' offstyle='light' />
              </div>
              <div className='col-5 my-auto'>
                2 Player
              </div>
            </div>

            {inputField(1, p1field, setP1field)}

            {inputField(2, p2field, setP2field, playerSwitch)}

            <div className='row justify-content-center bg-light border border-bottom-0 border-top-0' style={{ height: '180px' }}>
              <div className='col-4 my-auto' style={{ textAlign: 'center' }}>
                <label htmlFor='card1'>
                  <img src={card1Img} alt='' className='w-100' />
                  <input type='radio' id='card1' name='cardBg' value={cardBg === 'card1'} onChange={(e) => setCardBg(e.target.id)} />
                </label>

              </div>
              <div className='col-4 my-auto' style={{ textAlign: 'center' }}>
                <label htmlFor='card2'>
                  <img src={card2Img} alt='' className='w-100' />
                  <input type='radio' id='card2' name='cardBg' value={cardBg === 'card2'} onChange={(e) => setCardBg(e.target.id)} />
                </label>
              </div>
              <div className='col-4 my-auto' style={{ textAlign: 'center' }}>
                <label htmlFor='card3'>
                  <img src={card3Img} alt='' className='w-100' />
                  <input type='radio' id='card3' name='cardBg' value={cardBg === 'card3'} onChange={(e) => setCardBg(e.target.id)} />
                </label>
              </div>
            </div>

            <div className='row justify-content-center bg-light border rounded-bottom border-top-0 pb-4' style={{ height: '50px'}}>
              <div className='col-5 my-auto' style={{ textAlign: 'center' }}>
                <input type='submit' className='btn orange border' value='Start Game' />
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

// <a href="https://www.vecteezy.com/free-vector/playing-card-back">Playing Card Back Vectors by Vecteezy</a>
// https://www.vecteezy.com/vector-art/102385-vector-playing-card-back
