import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Bootbox from 'bootbox-react';
import PropTypes from 'proptypes';

import { TilesContext } from '../../context/tilesContext';

function CustomizerSetDelete({ setId }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const history = useHistory();
  const { deleteTileSet } = useContext(TilesContext);

  function handleSetDelete(confirmed) {
    if (confirmed) {
      deleteTileSet(setId);
      history.push('/customizer');
    } else {
      setShowConfirm(false);
    }
  }

  useEffect(() => (() => {
    setShowConfirm(false);
  }));

  return (
    <>
      <button
        className='btn btn-secondary btn-sm text-uppercase'
        type='button'
        onClick={() => setShowConfirm(true)}
      >
        Delete
      </button>
      <Bootbox
        show={showConfirm}
        type='confirm'
        message='Are you sure you want to delete this set?'
        onSuccess={() => handleSetDelete(true)}
        onCancel={() => handleSetDelete(false)}
        onClose={() => handleSetDelete(false)}
        successClassNames='btn-success'
      />
    </>
  );
}

export default CustomizerSetDelete;

CustomizerSetDelete.propTypes = { setId: PropTypes.number.isRequired };
