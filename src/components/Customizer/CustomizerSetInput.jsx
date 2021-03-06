import React, { useState, useContext } from 'react';

import { TilesContext } from '../../context/tilesContext';

function CustomizerSetInput() {
  const { addTileSet } = useContext(TilesContext);
  const [newSetInputValue, setNewSetInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTileSet(newSetInputValue);
    setNewSetInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <input
          type='text'
          name='newSet'
          value={newSetInputValue}
          required
          onChange={(e) => setNewSetInputValue(e.target.value)}
          className='form-control form-control-sm'
          placeholder='Enter set name'
          maxLength='18'
        />
        <div className='input-group-append'>
          <button
            type='submit'
            className='btn btn-secondary btn-sm'
          >
            <svg
              width='1.2em'
              height='1.2em'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z'
              />
              <path
                fillRule='evenodd'
                d='M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z'
              />
              <path
                fillRule='evenodd'
                d='M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z'
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CustomizerSetInput;
