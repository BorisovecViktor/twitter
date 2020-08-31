import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavBar } from '../../store/navBar';
import cn from 'classnames';
import * as store from '../../store';

import './NavBurger.scss';

const NavBurger = () => {
  const dispatch = useDispatch();
  const isNavBarVisible = useSelector(store.getIsNavBarVisible);

  const handleToggleNavBar = () => {
    dispatch(toggleNavBar(isNavBarVisible));
  }

  return (
    <button
      className={cn('feed__burger burger', {
        'burger--active': isNavBarVisible
      })}
      onClick={handleToggleNavBar}
    >
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </button>
  );
}

export default NavBurger;
