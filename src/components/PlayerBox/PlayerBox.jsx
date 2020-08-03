import React from 'react';
import PropTypes from 'proptypes';
import ReactTooltip from 'react-tooltip';

function PlayerBox({ playerObj, player, isPlaying }) {
  return (

    <div className='col-5 text-center'>
      <ReactTooltip effect='solid' />
      <div className='row'>
        <div className={`col text-uppercase my-auto pt-1 ${isPlaying ? 'isPlaying rounded' : ''}`} style={{ height: '35px'}}>
          <span style={{ fontWeight: '700', fontSize: '1.1rem'}}>{playerObj.name}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <span style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '3.5rem' }}>{playerObj.matched}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col text-uppercase'>
          <span style={{ fontWeight: '700', fontSize: '1rem', lineHeight: '2rem' }}>{`Player ${player}`}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col '>
          <small className='tooltipper text-uppercase' data-tip='Number of moves played'>Moves</small>
        </div>
        <div className='col'>
          <small className='tooltipper text-uppercase' data-tip='Scores divided by moves'>Acc.</small>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {playerObj.moves}
        </div>
        <div className='col'>
          {`${Math.floor((playerObj.matched / playerObj.moves) * 100) || 0}%`}
        </div>
      </div>
    </div>

  );
}

{/* <div className='col col-4 col-sm-4 col-lg-3'>
      <div className='row text-center text-uppercase text-white'>
        <div className={`col col-md-6 col-12 py-md-1 pt-1 px-0 ${isPlaying ? ' bg-success isPlaying' : 'bg-secondary'}`}>
          <strong>
            
          </strong>
        </div>
        <div className={`col py-md-1 pb-1 ${isPlaying ? ' bg-success' : 'bg-secondary'}`}>
          {playerObj.name ? <span></span> : ''}
        </div>
      </div>
      <div className='row bg-light'>
        <div className='col text-center'>
          Score:
          <br />
          
        </div>
        <div className='col text-center'>
          Moves:
          <br />
          
        </div>
      </div>
    </div> */}

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
