import React, { useState } from 'react';
import imageResizeCrop from '@utils/imageResizeCrop';

function Customizer() {
  const [uploadedFile, setUploadedFile] = useState();

  function handleChange(event) {
    setUploadedFile(event.target.files[0]);
  }

  async function handleUpload() {
    try {
      const convertedFile = await imageResizeCrop(uploadedFile);
      const name = `photo_${new Date()}`;
      localStorage.setItem(name, convertedFile);
    } catch (err) {
      console.log(err);
    }
  }

  // const inLocalStorage = localStorage.map((item) => item);
  function getLocalImages() {
    return Object.keys(localStorage).map((key) => {
      return <>{key}</>
    })
  }

  return (
    <div className='justify-content-center'>
      <div className='col pt-4' style={{ maxWidth: '400px' }}>
        <input type='file' name='file' accept='image/*' onChange={handleChange} />
        <button type='button' className='btn btn-primary' onClick={handleUpload}>Upload</button>
        {getLocalImages()}
      </div>
    </div>
  );
}

export default Customizer;
