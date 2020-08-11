import React from 'react';
import PropTypes from 'proptypes';

function GameSetupRadio({ cardBgName, cardBg, setCardBg }) {
  const cardBgImage = require(`../../../assets/images/tile-bg/setup_${cardBgName}.png`)

  return (
    <div className='col-4 my-auto'>
      <label htmlFor={cardBgName}>
        <img src={cardBgImage.default} alt='' className='w-100' />
        <input
          type='radio'
          id={cardBgName}
          value={cardBgName}
          checked={cardBg === cardBgName}
          name='cardBg'
          onChange={(e) => setCardBg(e.target.id)}
        />
      </label>
    </div>
  );
}

export default GameSetupRadio;

GameSetupRadio.propTypes = {
  cardBgName: PropTypes.string.isRequired,
  cardBg: PropTypes.string.isRequired,
  setCardBg: PropTypes.func.isRequired,
};
