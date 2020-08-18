import React from 'react';
import PropTypes from 'proptypes';
import BootStrapSwitchButton from 'bootstrap-switch-button-react';

function GameSetupSwitch({ playerToggle, setPlayerToggle }) {
  return (
    <div
      className='row justify-content-center bg-light border rounded-top border-bottom-0 pt-3'
      style={{ height: '70px' }}
    >
      <div className='col-5 my-auto text-right'>
        1 Player
      </div>
      <div className='col-2 p-0 my-auto text-center'>
        <BootStrapSwitchButton
          onChange={(e) => setPlayerToggle(e)}
          checked={playerToggle}
          onlabel='1P'
          offlabel='2P'
          // eslint-disable-next-line react/style-prop-object
          style='switch'
          onstyle='light'
          offstyle='light'
        />
      </div>
      <div className='col-5 my-auto'>
        2 Player
      </div>
    </div>
  );
}

export default GameSetupSwitch;

GameSetupSwitch.propTypes = {
  playerToggle: PropTypes.bool.isRequired,
  setPlayerToggle: PropTypes.func.isRequired,
};
