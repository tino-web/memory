import React from 'react';
import PropTypes from 'proptypes';
import ReactTooltip from 'react-tooltip';

function ScoreBoardPlayerBox({ playerObj, player, isPlaying, isWinner }) {
  const accuracy = Math.floor((playerObj.matched / playerObj.moves) * 100) || 0;

  return (
    <div className='col-5 text-center'>
      <ReactTooltip effect='solid' />
      <div className='row'>
        <div
          className={`col text-uppercase my-auto pt-1 ${player === '1' ? 'top-left-radius' : 'top-right-radius'} ${isPlaying && 'isPlaying'} ${isWinner && 'isWinner'}`}
          style={{ height: '35px' }}
        >
          <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>
            {playerObj.name}
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <span style={{ fontWeight: '700', fontSize: '3rem', lineHeight: '3.5rem' }}>
            {playerObj.matched}
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col text-uppercase'>
          <span style={{ fontWeight: '700', fontSize: '1rem', lineHeight: '2rem' }}>
            {`Player ${player}`}
          </span>
        </div>
      </div>
      <div className='row text-uppercase'>
        <div className='col'>
          <small className='tooltipper' data-tip='Number of moves played'>
            Moves
          </small>
        </div>
        <div className='col'>
          <small className='tooltipper' data-tip='Score divided by moves'>
            Acc.
          </small>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {playerObj.moves}
        </div>
        <div className='col'>
          {`${accuracy}%`}
        </div>
      </div>
    </div>

  );
}

export default ScoreBoardPlayerBox;

ScoreBoardPlayerBox.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    matched: PropTypes.number.isRequired,
    moves: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isWinner: PropTypes.bool.isRequired,
};
