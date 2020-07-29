import React from 'react';

function Footer() {
  return (
    <footer className='bg-light d-block py-1 mt-auto'>
      <span className='text-muted small row justify-content-center no-gutters'>
        Memory! | made with
        <span role='img' aria-label='love' className='px-1'>💖</span>
        by Tino (
        <a
          href='https://github.com/tino-web/memory'
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
        )
      </span>
    </footer>
  );
}

export default Footer;
