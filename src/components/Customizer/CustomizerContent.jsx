import React, { useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { TilesContext } from '../../context/tilesContext';
import CustomizerTile from './CustomizerTile';
import CustomizerFileInput from './CustomizerFileInput';
import CustomizerSetInput from './CustomizerSetInput';

function CustomizerContent() {
  const { tileSetObj } = useContext(TilesContext);
  const history = useHistory();
  const { type, id } = useParams();
  let tileGrid;
  let selectedSet;

  function handleSetClick(setId) {
    history.push(`/customizer/set/${setId}`);
  }

  function handleTileClick(tileId) {
    // Function for deleting photo
  }

  if (type === 'set') {
    selectedSet = tileSetObj.find((item) => item.tileSetId === Number(id));
  }

  if (selectedSet) {
    tileGrid = selectedSet.tiles.map((item) => (
      <CustomizerTile
        handleClick={handleTileClick}
        tileFileStored={selectedSet.stored}
        tileFile={item.fileName}
        key={`tile_${item.tileId}`}
        id={item.tileId}
      />
    ));
  } else {
    tileGrid = tileSetObj.map((item) => (
      <CustomizerTile
        handleClick={handleSetClick}
        tileFileStored={item.stored}
        tileFile={item.tiles[0] ? item.tiles[0].fileName : null}
        key={`set_${item.tileSetId}`}
        id={item.tileSetId}
      />
    ));
  }

  const title = selectedSet ? selectedSet.name : 'Your Tile Sets';

  return (
    <>
      <div className='row bg-secondary border rounded-top border-bottom-0 pt-1 pb-1' style={{height: '40px'}}>
        <div className='col-3 text-uppercase my-auto'>
          {selectedSet && <Link className='btn btn-secondary btn-sm' to='/customizer'>Back</Link> }
        </div>
        <div className='col-6 text-center my-auto text-uppercase text-white'>
          <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>
            {title}
          </span>
        </div>
        <div className='col-3 my-auto text-uppercase text-right'>
          {selectedSet && <button className='btn btn-secondary btn-sm text-uppercase'>Save</button> }
        </div>
      </div>
      <div className='row justify-content-center bg-light border border-bottom-0 border-top-0 pt-3'>
        {tileGrid}
      </div>
      <div className='row bg-light border justify-content-center rounded-bottom border-top-0 pb-2'>
        {selectedSet && selectedSet.tiles.length < 10 ? <CustomizerFileInput setId={id} /> : ''}
        {!selectedSet ? <CustomizerSetInput /> : ''}
      </div>
    </>
  );
}

export default CustomizerContent;
