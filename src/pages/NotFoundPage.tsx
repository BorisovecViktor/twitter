import React from 'react';
import { useHistory } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="notfound">
      <div className="notfound__message">
        <h2 className="notfound__message-title">
          Oops!
        </h2>
        <p className="notfound__message-text">
          This page is currently not available
        </p>
        <button
          type="button"
          className="notfound__link"
          onClick={() => history.push('/')}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
