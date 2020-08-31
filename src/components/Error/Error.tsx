import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as store from '../../store';

import './Error.scss';

type Props = {
  error: string;
}

const Error: React.FC<Props> = ({ error }) => {
  const dispatch = useDispatch();

  const reloadPosts = () => {
    dispatch(store.loadPosts());
  }

  return (
    <div className="error">
      <p className="error__text">
        {error}
      </p>
      <Link
        to="/"
        className="error__link"
        onClick={reloadPosts}
      >
        Click to try again
      </Link>
    </div>
  );
}

export default Error;
