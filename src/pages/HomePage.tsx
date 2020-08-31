import React from 'react';
import { useSelector } from 'react-redux';
import * as store from '../store';

import './HomePage.scss';

import Nav from '../components/Nav/Nav';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';

const HomePage = () => {
  const error = useSelector(store.getErrorMessage);
  const loading = useSelector(store.getIsLoading);

  return (
    <>
      {error
        ?
        <Error error={error} />
        :
        <>
          {loading
            ?
            <Spinner />
            :
            <div className="wrapper">
              <Nav />
              <Feed />
              <Widgets />
            </div>
          }
        </>
      }
    </>
  );
};

export default HomePage;
