import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.StrictMode>
      <div>Hello there cupcake!</div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
