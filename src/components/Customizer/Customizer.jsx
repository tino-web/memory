import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CustomizerContent from './CustomizerContent';
import './Customizer.css';

function Customizer() {
  const { path } = useRouteMatch();

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col pt-4' style={{ maxWidth: '400px' }}>
          <Switch>
            <Route path={`${path}/:type/:id`} component={CustomizerContent} />
            <Route path={`${path}`} component={CustomizerContent} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Customizer;
