import React from 'react';
import PropTypes from 'proptypes';

function Tile({ tileLocationItem, tileSetItem, handleClick, tileBg }) {
  const tileBgImg = require(`../../assets/images/tile-bg/${tileBg}.png`);
  const tileImg = require(`../../assets/images/tiles/${tileSetItem.fileName}`);

  return (
    <div className='scene'>
      <div className={`tile ${tileLocationItem.isSelected && 'isTurned'} ${tileLocationItem.isMatched && 'isTurned isMatched'}`}>
        <div className='face front'>
          <button type='button' className='tileBtn' onClick={() => handleClick(tileLocationItem)} >
            <img src={tileBgImg.default} alt='' className='tileImg' />
          </button>
        </div>
        <div className='face back'>
          <img className='tileImg' src={tileImg.default} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Tile;

Tile.propTypes = {
  tileSetItem: PropTypes.shape({
    tileId: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired,
  tileLocationItem: PropTypes.shape({
    tileId: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
