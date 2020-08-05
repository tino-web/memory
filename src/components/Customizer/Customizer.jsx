import React, { useState } from 'react';

function Customizer() {
  const [uploadedFile, setUploadedFile] = useState();
  const [convertedFile, setConvertedFile] = useState();

  function handleChange(event) {
    setUploadedFile(event.target.files[0]);
  }

  function handleUpload() {
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const targetWidth = 150;
        const targetHeight = 100;
        const imgOrientation = img.width > img.height ? 'landscape' : 'portrait';
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const sourceWidth = img.width;
        const sourceHeight = img.width * (targetHeight / targetWidth);
        const sourceX = 0;
        const sourceY = img.height / 2 - sourceHeight / 2;
        console.log(sourceWidth, sourceHeight, sourceX, sourceY);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img,
          sourceX, sourceY,
          sourceWidth, sourceHeight,
          0, 0,
          targetWidth, targetHeight);
        const image = ctx.canvas.toDataURL('image/png', 1).replace('image/png', 'image/octet-stream');
        console.log(image);
        setConvertedFile(image);
        localStorage.setItem('photo', image);
      };
      reader.onerror = (error) => console.log(error);
    };
  }

  return (
    <div className='justify-content-center'>
      <div className='col pt-4' style={{ maxWidth: '400px' }}>
        <input type='file' name='file' accept='image/*' onChange={handleChange} />
        <button type='button' className='btn btn-primary' onClick={handleUpload}>Upload</button>
        <img src={localStorage.getItem('photo')} alt='' />

      </div>
    </div>
  );
}

export default Customizer;
