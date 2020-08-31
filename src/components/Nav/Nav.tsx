import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavBar } from '../../store/navBar';
import * as store from '../../store';
import cn from 'classnames';
import './Nav.scss';

import { headerLinks } from '../../constants/index';
import TwitterIcon from "@material-ui/icons/Twitter";

const Nav = () => {
  const isNavBarVisible = useSelector(store.getIsNavBarVisible);
  const dispatch = useDispatch();

  const handleCloseNavBar = () => {
    dispatch(toggleNavBar(isNavBarVisible));
  }

  return (
    <nav className={cn("nav", {
      "nav--active": isNavBarVisible
    })}>
      <TwitterIcon className="nav__twitter-icon" />
      <ul className="nav__list">
        {headerLinks.map(({ text, Icon, url }) => (
          <li className="nav__item" key={text}>
            <NavLink
              className="nav__link"
              exact={url === '/'}
              activeClassName="nav__link--active"
              to={{
                pathname: url,
              }}
              onClick={handleCloseNavBar}
            >
              <Icon className="nav__icon" />
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
