import React, { useState, useRef, useContext } from 'react';
import imageResizeCrop from '@utils/imageResizeCrop';
import { TilesContext } from '@context/tilesContext';

function CustomizerFileInput({ setId }) {
  const {
    getMaxTileId,
    addTile,
  } = useContext(TilesContext);
  const [fileNames, setFileNames] = useState('');
  const fileInput = useRef(null);

  function handleChange(e) {
    const newFileNames = [];
    for (let i = 0; i < e.target.files.length; i += 1) {
      newFileNames.push(e.target.files[i].name);
    }
    setFileNames(newFileNames.join(', '));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newTileId = getMaxTileId(setId) + 1;
    try {
      const convertedFile = await imageResizeCrop(fileInput.current.files[0]);
      const name = `${setId}_${newTileId}`;
      localStorage.setItem(name, convertedFile);
      addTile(newTileId, setId);
    } catch (err) {
      console.log(err);
    }
  }

  // // const inLocalStorage = localStorage.map((item) => item);
  // function getLocalImages() {
  //   return Object.keys(localStorage).map((key) => {
  //     return <>{key}</>
  //   })
  // }

  return (
    <div className='col-12'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='custom-file' style={{ height: 'inherit' }}>
            <input ref={fileInput} type='file' className='custom-file-input form-control-sm' onChange={handleChange} multiple id='fileInput' required />
            <label className='custom-file-label form-control-sm' id='fileLabel' htmlFor='fileInput' style={{ overflow: 'hidden'}}>
              {fileNames || 'Choose files'}
            </label>
          </div>
          <div className='input-group-append'>
            <button className='btn btn-secondary btn-sm' type='submit'>
              <svg width='1.2em' height='1.2em' viewBox='0 0 16 16' className='bi bi-cloud-arrow-up-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 1 0V6.707l1.146 1.147a.5.5 0 0 0 .708-.708z' />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomizerFileInput;