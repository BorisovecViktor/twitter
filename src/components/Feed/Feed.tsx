import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { debounce } from '../../helpers/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../store/search';
import { toggleWidgets } from '../../store/widgets';
import cn from 'classnames';

import './Feed.scss';

import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import * as store from '../../store';
import SearchIcon from "@material-ui/icons/Search";
import WidgetsIcon from '@material-ui/icons/Widgets';
import NavBurger from '../NavBurger/NavBurger';

const Feed = () => {
  const posts = useSelector(store.getVisiblePosts);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputEl = useRef<HTMLInputElement>(null);
  const searchParams = new URLSearchParams(location.search);
  const query = useMemo(() => searchParams.get('query') || '', [searchParams]);
  const [visibleQuery, setVisibleQuery] = useState(query);
  const isWidgetsVisible = useSelector(store.getIsWidgetsVisible);

  useEffect(() => {
    dispatch(setSearchQuery(query));
    setVisibleQuery(query);
  }, [query, dispatch]);

  const handleSearchInput = useCallback(debounce((value: string) => {
    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    dispatch(setSearchQuery(value));
    history.push({
      search: searchParams.toString(),
    });
  }, 500), []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchInput(e.currentTarget.value);
    setVisibleQuery(e.currentTarget.value);
  }

  const handleClearInputField = () => {
    setVisibleQuery('');
    searchParams.delete('query');
    history.push({
      search: searchParams.toString(),
    });

    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }

  const handleToggleWidgetsVisible = () => {
    dispatch(toggleWidgets(isWidgetsVisible));
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <NavBurger />
        <div className="feed__search">
          <SearchIcon className="feed__search-icon" />
          <input
            type="text"
            className="feed__search-input"
            ref={inputEl}
            value={visibleQuery}
            placeholder="Search Tweet..."
            onChange={handleSearchChange}
          />
          {query.length > 0
            &&
            <button
              className="feed__search-delete"
              type="button"
              onClick={handleClearInputField}
            >
            </button>
          }
        </div>
        <WidgetsIcon
          className={cn("feed__widget-icon", {
            "feed__widget-icon--active": isWidgetsVisible
          })}
          onClick={handleToggleWidgetsVisible}
        />
      </div>
      <TweetBox />
      {posts.map((post: Post) => (
        <div className="post" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}

export default Feed;
