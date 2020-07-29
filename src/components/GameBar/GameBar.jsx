import React from 'react';

function GameBar() {
  return (
    <div className='row justify-content-center mt-3'>

      <div className='col col-4 col-sm-3'>
        <div className='row'>
          <div className='col'>Player 1 (Peter)</div>
        </div>
        <div className='row'>
          <div className='col'>Score</div>
          <div className='col'>Accuracy</div>
        </div>
      </div>

      <div className='col col-3 col-sm-3 col-lg-2'>
        Time elapsed
      </div>

      <div className='col col-4 col-sm-3'>
        <div className='row'>
          <div className='col'>Player 2 (Paul)</div>
        </div>
        <div className='row'>
          <div className='col'>Score</div>
          <div className='col'>Accuracy</div>
        </div>
      </div>

    </div>
  );
}

export default GameBar;
