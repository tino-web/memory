import React, { useState } from 'react';
import PropTypes from 'proptypes';
import tileSetInit from '../data/tileSet';
import getRandomNumberArr from '../utils/getRandomNumberArr';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [tileSetObj, setTileSetObj] = useState(tileSetInit);
  const [tileLocationObj, setTileLocationObj] = useState(getRandomNumberArr(20));

  return (
    <Context.Provider value={{
      tileSetObj,
      tileLocationObj,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

ContextProvider.propTypes = { children: PropTypes.node.isRequired };
