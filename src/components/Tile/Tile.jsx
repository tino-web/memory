import React, { useState } from 'react';
import PropTypes from 'proptypes';

const tileBg = require('../../assets/images/tile-bg/1.jpg');

function Tile({ tileData }) {
  const [isClicked, setIsClicked] = useState(false);
  const tileImg = require(`../../assets/images/tiles/${tileData.fileName}`);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className='scene'>
      <div className={`tile ${isClicked ? 'isClicked' : ''}`}>
        <div className='face front'>
          <input type='image' className='tileImg' src={tileBg.default} alt='' onClick={handleClick} />
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
  tileData: PropTypes.shape({
    tileId: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired,
};
