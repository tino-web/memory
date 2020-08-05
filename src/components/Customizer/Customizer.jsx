import React from 'react';

function Customizer() {

  function handleClick() {
    
  };

  return (
    <div className='row justify-content-center'>
      <div className='col pt-4' style={{ maxWidth: '400px' }}>
        <button type='button' className='btn btn-primary' onClick={handleClick}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Customizer;
