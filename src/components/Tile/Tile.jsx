import React from 'react';
import PropTypes from 'proptypes';

const tileBg = require('../../assets/images/tile-bg/1.jpg');

function Tile({ tileLocationItem, tileSetItem, handleClick }) {
  const tileImg = require(`../../assets/images/tiles/${tileSetItem.fileName}`);
  return (
    <div className='scene'>
      <div className={`tile ${tileLocationItem.isSelected || tileLocationItem.isMatched ? 'isTurned' : ''}`}>
        <div className='face front'>
          <input type='image' className='tileImg' src={tileBg.default} alt='' onClick={() => handleClick(tileLocationItem)} />
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
    isMatchedBy: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
