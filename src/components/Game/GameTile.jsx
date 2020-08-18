import React from 'react';
import PropTypes from 'proptypes';

function GameTile({ tileLocationData, tileData, handleClick, tileBg, tileFileStored }) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const tileBgImg = require(`../../assets/images/tile-bg/${tileBg}.png`);

  let tileImg;

  if (tileFileStored === 'assets') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    tileImg = require(`../../assets/images/tiles/${tileData.fileName}`);
  } else if (tileFileStored === 'local') {
    tileImg = localStorage.getItem(tileData.fileName);
  }

  return (
    <div className='scene'>
      <div className={`tile ${tileLocationData.isSelected && 'isTurned'} ${tileLocationData.isMatched && 'isTurned isMatched'}`}>
        <div className='face front'>
          <button
            type='button'
            className='tileBtn'
            onClick={() => handleClick(tileLocationData)}
          >
            <img
              src={tileBgImg.default}
              alt=''
              className='tileImg'
            />
          </button>
        </div>
        <div className='face back'>
          <img
            className='tileImg'
            src={tileFileStored === 'assets' ? tileImg.default : tileImg}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default GameTile;

GameTile.propTypes = {
  tileData: PropTypes.shape({
    tileSetId: PropTypes.number.isRequired,
    tileId: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired,
  tileLocationData: PropTypes.shape({
    tileId: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  tileBg: PropTypes.string.isRequired,
  tileFileStored: PropTypes.string.isRequired,
};
