import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';
import * as api from '../helpers/api';

import postsReducer, { setPosts } from './posts';
import errorReducer, { setError } from './error';
import loadingReducer, { startLoading, finishLoading } from './loading';
import searchReducer from './search';
import favoritesReducer from './favorites';
import navBarVisibleReducer from './navBar';
import widgetsVisibleReducer from './widgets';

const rootReducer = combineReducers({
  posts: postsReducer,
  errorMessage: errorReducer,
  isLoading: loadingReducer,
  searchQuery: searchReducer,
  favorites: favoritesReducer,
  isNavBarVisible: navBarVisibleReducer,
  isWidgetsVisible: widgetsVisibleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getPosts = (state: RootState) => state.posts;
export const getFavorites = (state: RootState) => state.favorites;
export const getIsNavBarVisible = (state: RootState) => state.isNavBarVisible;
export const getIsWidgetsVisible = (state: RootState) => state.isWidgetsVisible;
export const getIsLoading = (state: RootState) => state.isLoading;
export const getErrorMessage = (state: RootState) => state.errorMessage;

export const loadPosts = () => {
  return async (dispatch: Dispatch<unknown>) => {
    dispatch(setError(''));
    dispatch(startLoading());

    try {
      const posts = await api.fetchPosts();

      dispatch(setPosts(posts));
      dispatch(finishLoading());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(finishLoading());
    }
  };
};

export const getVisiblePosts = (state: RootState) => {
  let visiblePosts: Post[] = state.posts.filter((post: Post) => {
    if (state.searchQuery !== '') {
      return post.text.toLowerCase().includes(state.searchQuery);
    }

    return post;
  });

  return visiblePosts;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
