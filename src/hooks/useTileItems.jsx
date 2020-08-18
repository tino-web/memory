import { useState, useEffect } from 'react';

function useTileItems(init) {
  const [tileItemObj, setTileItemObj] = useState(() => {
    let value;
    try {
      value = JSON.parse(JSON.parse(localStorage.getItem('tileItems') || init));
    } catch (e) {
      value = init;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem('tileItems', JSON.stringify(JSON.stringify(tileItemObj)));
  }, [tileItemObj]);

  return [tileItemObj, setTileItemObj];
}

export default useTileItems;
