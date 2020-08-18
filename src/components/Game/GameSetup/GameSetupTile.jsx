import React, { useState } from 'react';
import PropTypes from 'proptypes';

function GameSetupTile({ id, fileName, tileFileStored, selectSet, setSelectSet }) {
  let tileImg;

  if (tileFileStored === 'assets') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    tileImg = require(`../../../assets/images/tiles/${fileName}`);
  } else if (tileFileStored === 'local') {
    tileImg = localStorage.getItem(fileName);
  } else {
    tileImg = '';
  }

  return (
    <div className='col-4 pb-3' style={{ height: '110px' }}>
      <label htmlFor={id}>
        <img
          className='tileImg customizerTileBtn'
          src={tileFileStored === 'assets' ? tileImg.default : tileImg}
          alt=''
        />
        <input
          type='radio'
          id={id}
          value={id}
          checked={selectSet === id}
          name='radioSet'
          onChange={(e) => setSelectSet(Number(e.target.id))}
        />
      </label>
    </div>

  );
}

export default GameSetupTile;

GameSetupTile.propTypes = {
  id: PropTypes.number.isRequired,
  fileName: PropTypes.string.isRequired,
  tileFileStored: PropTypes.string.isRequired,
  selectSet: PropTypes.number.isRequired,
  setSelectSet: PropTypes.func.isRequired,
};
