import React, { useState } from 'react';
import PropTypes from 'proptypes';

import CustomizerTileDelete from './CustomizerTileDelete';

function CustomizerTile({ id, setId, fileName, tileFileStored, clickHandler }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const noTiles = fileName === null;
  const disabled = (!clickHandler && !noTiles && tileFileStored === 'assets');

  let tileImg;

  if (!noTiles && tileFileStored === 'assets') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    tileImg = require(`../../assets/images/tiles/${fileName}`);
  } else if (!noTiles && tileFileStored === 'local') {
    tileImg = localStorage.getItem(fileName);
  } else {
    tileImg = '';
  }

  function handleClick() {
    if (clickHandler || noTiles) {
      clickHandler(id);
    } else if (tileFileStored === 'local') {
      setShowConfirm(true);
    }
  }

  return (
    <div className='col-4 pb-3' style={{ height: '85px' }}>
      <CustomizerTileDelete
        setId={setId}
        fileName={fileName}
        tileId={id}
        show={showConfirm}
        setShow={setShowConfirm}
      />
      <button
        className='customizerTileBtn'
        type='button'
        disabled={disabled}
        onClick={handleClick}
      >
        {noTiles
          ? (
            <svg
              width='3em'
              height='3em'
              viewBox='0 0 16 16'
              className='bi bi-cloud-arrow-up-fill text-secondary'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 1 0V6.707l1.146 1.147a.5.5 0 0 0 .708-.708z'
              />
            </svg>
          )
          : (
            <img
              className='tileImg'
              src={tileFileStored === 'assets' ? tileImg.default : tileImg}
              alt=''
            />
          )}
      </button>
    </div>

  );
}

export default CustomizerTile;

CustomizerTile.propTypes = {
  id: PropTypes.number.isRequired,
  setId: PropTypes.number,
  fileName: PropTypes.string,
  tileFileStored: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

CustomizerTile.defaultProps = {
  setId: null,
  fileName: null,
  clickHandler: null,
};
