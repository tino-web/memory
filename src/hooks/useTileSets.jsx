import { useState, useEffect } from 'react';

function useTileSets(init) {
  const [tileSetObj, setTileSetObj] = useState(() => {
    let value;
    try {
      value = JSON.parse(JSON.parse(localStorage.getItem('tileSets') || init));
    } catch (e) {
      value = init;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem('tileSets', JSON.stringify(JSON.stringify(tileSetObj)));
  }, [tileSetObj]);

  return [tileSetObj, setTileSetObj];
}

export default useTileSets;
