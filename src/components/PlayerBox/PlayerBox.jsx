import React from 'react';
import PropTypes from 'proptypes';

function PlayerBox({ playerObj, player, isPlaying }) {
  return (
    <div className='col col-4 col-sm-4 col-lg-3'>
      <div className='row text-center text-uppercase text-white'>
        <div className={`col col-md-7 col-12 py-md-1 pt-1 ${isPlaying ? ' bg-success isPlaying' : 'bg-secondary'}`}>
          <strong>
            {`Player ${player}`}
          </strong>
        </div>
        <div className={`col py-md-1 pb-1 ${isPlaying ? ' bg-success' : 'bg-secondary'}`}>
          {playerObj.name ? <span>({playerObj.name})</span> : ''}
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
