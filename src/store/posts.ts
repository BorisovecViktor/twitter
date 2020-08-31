import { Action } from 'redux';

const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const ADD_COMMENT = 'ADD_COMMENT';

type SetPostsAction = Action<typeof SET_POSTS> & {
  posts: Post[];
};

type AddPostAction = Action<typeof ADD_POST> & {
  post: Post;
};

type AddCommentAction = Action<typeof ADD_COMMENT> & {
  comment: Comments;
};

export const setPosts = (posts: Post[]) => ({ type: SET_POSTS, posts });
export const addPost = (post: Post) => ({ type: ADD_POST, post });
export const addComment = (comment: Comments) => ({ type: ADD_COMMENT, comment });

type PossibleActions = SetPostsAction | AddPostAction | AddCommentAction;

const reducer = (posts: Post[] = [], action: PossibleActions) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    case ADD_POST:
      return [action.post, ...posts];

    case ADD_COMMENT:
      return posts.map(post => {
        if (post.id === action.comment.postId) {
          post.comments.unshift(action.comment);
        }

        return post;
      });

    default:
      return posts;
  }
};

export default reducer;
