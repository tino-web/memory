import React, { useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { TilesContext } from '../../context/tilesContext';
import CustomizerTile from './CustomizerTile';
import CustomizerFileInput from './CustomizerFileInput';
import CustomizerSetInput from './CustomizerSetInput';
import CustomizerSetDelete from './CustomizerSetDelete';

function CustomizerContent() {
  const {
    tileSetObj,
    getTiles,
  } = useContext(TilesContext);
  const history = useHistory();
  const {
    type,
    id,
  } = useParams();

  function handleSetClick(setId) {
    history.push(`/customizer/set/${setId}`);
  }

  let clickedSet;

  if (type === 'set') {
    clickedSet = tileSetObj.find((item) => item.tileSetId === Number(id));
  }

  let tileGrid;
  let tileItems;

  if (clickedSet) {
    tileItems = getTiles(clickedSet.tileSetId);
    tileGrid = tileItems.map((item) => (
      <CustomizerTile
        tileFileStored={clickedSet.stored}
        fileName={item.fileName}
        setId={Number(id)}
        key={`tile_${item.tileId}`}
        id={item.tileId}
      />
    ));
  } else {
    tileGrid = tileSetObj.map((item) => {
      tileItems = getTiles(item.tileSetId);
      return (
        <CustomizerTile
          clickHandler={handleSetClick}
          tileFileStored={item.stored}
          fileName={tileItems[0] ? tileItems[0].fileName : null}
          key={`set_${item.tileSetId}`}
          id={item.tileSetId}
        />
      );
    });
  }

  const title = clickedSet ? clickedSet.name : 'Your Tile Sets';

  return (
    <>
      <div
        className='row bg-secondary border rounded-top border-bottom-0 pt-1 pb-1'
        style={{ height: '40px' }}
      >
        <div className='col-3 text-uppercase pl-1 my-auto'>
          {
            clickedSet
            && <Link className='btn btn-secondary btn-sm' to='/customizer'>Back</Link>
          }
        </div>
        <div className='col-6 px-0 text-center my-auto text-uppercase text-white'>
          <span style={{ fontWeight: '700', fontSize: '1rem', overflow: 'hidden' }}>
            {title}
          </span>
        </div>
        <div className='col-3 my-auto pr-1 text-uppercase text-right'>
          { (clickedSet && clickedSet.stored !== 'assets') && <CustomizerSetDelete setId={Number(id)} /> }
        </div>
      </div>
      <div className='row justify-content-center bg-light border border-bottom-0 border-top-0 pt-3'>
        {tileGrid}
      </div>
      <div className='row bg-light border justify-content-center rounded-bottom border-top-0 pb-2'>
        {clickedSet && <CustomizerFileInput setId={Number(id)} show={tileItems.length < 10} /> }
        { !clickedSet && <CustomizerSetInput /> }
      </div>
    </>
  );
}

export default CustomizerContent;
