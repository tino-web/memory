import React, { useState } from 'react';
import PropTypes from 'proptypes';

function Tile({ tileData }) {

  const [isClicked, setIsClicked] = useState(false)
  const tileImg = require(`../../assets/images/tiles/${tileData.fileName}`)
  const tileBg = require('../../assets/images/tile-bg/1.jpg')
  console.log(tileImg.default);
  return (
    <div className='scene'>
      <div className={`tile ${isClicked ? 'isClicked' : ''}`}>
        <div className='face front'>
          <img className='tileImg' src={tileBg.default} alt='' onClick={() => setIsClicked(true)} />
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
