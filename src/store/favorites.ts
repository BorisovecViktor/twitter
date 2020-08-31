import { Action } from 'redux';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

type addToFavoritesAction = Action<typeof ADD_FAVORITE> & {
  post: Post;
};

type removeFromFavoritesAction = Action<typeof REMOVE_FAVORITE> & {
  post: Post;
};

export const addToFavorites = (post: Post) => ({
  type: ADD_FAVORITE,
  post,
});

export const removeFromFavorites = (post: Post) => ({
  type: REMOVE_FAVORITE,
  post,
});

type PossibleActions = addToFavoritesAction | removeFromFavoritesAction;

const reducer = (favorites: Post[] = [], action: PossibleActions) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...favorites, action.post];

    case REMOVE_FAVORITE:
      return [...favorites].filter(post => post.id !== action.post.id);

    default:
      return favorites;
  }
};

export default reducer;
