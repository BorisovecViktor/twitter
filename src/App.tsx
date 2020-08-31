import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <div className="app">
      <main>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
