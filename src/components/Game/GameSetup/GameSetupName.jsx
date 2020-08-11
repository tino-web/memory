import React, { useState } from 'react';
import PropTypes from 'proptypes';

function GameSetupName({ playerNumber, hideRow, inputRef }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      className={`row justify-content-center bg-light border border-bottom-0 border-top-0 showRow ${hideRow ? 'hideRow' : ''}`}
      style={{ height: '50px' }}
    >
      <div className='col-3 my-auto text-right'>
        {`Player ${playerNumber}:`}
      </div>
      <div className='col-6 my-auto'>
        <input
          type='text'
          value={inputValue}
          className='form-control'
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter name'
          required={!hideRow}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default GameSetupName;

GameSetupName.propTypes = {
  playerNumber: PropTypes.string.isRequired,
  hideRow: PropTypes.bool.isRequired,
  inputRef: PropTypes.shape(
    { current: PropTypes.instanceOf(HTMLInputElement) },
  ).isRequired,
};
