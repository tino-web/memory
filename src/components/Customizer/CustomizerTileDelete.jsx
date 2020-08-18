import React, { useContext, useEffect } from 'react';
import Bootbox from 'bootbox-react';
import PropTypes from 'proptypes';

import { TilesContext } from '../../context/tilesContext';

function CustomizerTileDelete({ setId, fileName, tileId, show, setShow }) {
  const { deleteTile } = useContext(TilesContext);

  function handleTileDelete(confirmed) {
    if (confirmed) {
      deleteTile(tileId, setId, fileName);
    } else {
      setShow(false);
    }
  }

  useEffect(() => (() => {
    setShow(false);
  }));

  return (
    <>
      <Bootbox
        show={show}
        type='confirm'
        message='Are you sure you want to delete this tile?'
        onSuccess={() => handleTileDelete(true)}
        onCancel={() => handleTileDelete(false)}
        onClose={() => handleTileDelete(false)}
        successClassNames='btn-success'
      />
    </>
  );
}

export default CustomizerTileDelete;

CustomizerTileDelete.propTypes = {
  setId: PropTypes.number,
  tileId: PropTypes.number.isRequired,
  fileName: PropTypes.string,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

CustomizerTileDelete.defaultProps = {
  setId: null,
  fileName: null,
};
