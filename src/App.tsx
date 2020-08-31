import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as store from './store';

import './App.scss';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(store.loadPosts());
  }, [dispatch]);

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
