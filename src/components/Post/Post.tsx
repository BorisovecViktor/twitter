import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import './Post.scss';

import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import * as store from '../../store';
import { addToFavorites, removeFromFavorites } from '../../store/favorites';
import Comment from '../Comments/Comments';

type Props = {
  post: Post;
}

const Post: React.FC<Props> = ({ post }) => {
  const { id, displayName, userName, verified, text, image, avatar, comments } = post;
  const favorites = useSelector(store.getFavorites);
  const isAddedToFavorites = favorites.some((post: Post) => post.id === id);
  const [isCommentFieldOpen, setIsCommentFieldOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleCommentField = () => {
    setIsCommentFieldOpen(!isCommentFieldOpen);
  }

  const handleToggleFavorite = () => {
    if (isAddedToFavorites) {
      dispatch(removeFromFavorites(post));
    } else {
      dispatch(addToFavorites(post));
    }
  }

  return (
    <>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <span className="post__display-name">
              {displayName}
            </span>
            <span className="post__special">
              {verified
                &&
                <VerifiedUserIcon className="post__badge" />
              }
            </span>
            <span className="post__user-name">
              {`@${userName}`}
            </span>
          </div>
          <p className="post__header-description">
            {text}
          </p>
        </div>
        {image
          &&
          <div className="post__image">
            <img className="post__picture" src={image} alt="post" />
          </div>
        }
        <div className="post__footer">
          <ChatBubbleOutlineIcon
            className="post__icon post__icon--chat"
            fontSize="small"
            onClick={handleToggleCommentField}
          />
          <FavoriteBorderIcon
            className={cn("post__icon post__icon--favorite", {
              "post__icon--active": isAddedToFavorites
            })}
            fontSize="small"
            onClick={handleToggleFavorite}
          />
        </div>
        <Comment
          id={id} comments={comments}
          isCommentFieldOpen={isCommentFieldOpen}
          setIsCommentFieldOpen={setIsCommentFieldOpen}
        />
      </div>
    </>
  );
}

export default Post;
