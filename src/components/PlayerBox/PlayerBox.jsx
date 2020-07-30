import React from 'react';
import PropTypes from 'proptypes';

function PlayerBox({ playerObj, player, isPlaying }) {
  return (
    <div className='col col-4 col-sm-3'>
      <div className='row text-center text-uppercase text-white'>
        <div className={`col py-1 ${isPlaying ? 'bg-success isPlaying' : 'bg-secondary'}`}>
          <strong>
            {`Player ${player}`}
            {playerObj.name ? ` (${playerObj.name})` : '' }
          </strong>
        </div>
      </div>
      <div className='row bg-light'>
        <div className='col text-center'>
          Score:
          <br />
          {playerObj.matched}
        </div>
        <div className='col text-center'>
          Moves:
          <br />
          {playerObj.moves}
        </div>
      </div>
    </div>
  );
}

export default PlayerBox;

PlayerBox.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    matched: PropTypes.number.isRequired,
    moves: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
