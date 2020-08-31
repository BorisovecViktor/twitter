import React, { useState } from 'react';
import { addComment } from '../../store/posts';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import './Comments.scss';

type Props = {
  id: string;
  comments: Comments[];
  isCommentFieldOpen: boolean;
  setIsCommentFieldOpen: (bool: boolean) => void;
}

const Comments: React.FC<Props> = ({
  id,
  comments,
  isCommentFieldOpen,
  setIsCommentFieldOpen
}) => {
  const [errorText, setErrorText] = useState(false);
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText(false);
    setCommentText(e.target.value);
  }

  const handleSubmitNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentText.length < 3) {
      return setErrorText(true);
    }

    dispatch(addComment({
      id: uuidv4(),
      postId: id,
      text: commentText,
    }));
    setCommentText('');
    setIsCommentFieldOpen(false);
  }

  return (
    <div className="post__comment comment">
      {isCommentFieldOpen
        &&
        <form action="#" className="comment__form" onSubmit={handleSubmitNewComment}>
          <input
            type="text"
            name="comment-text"
            value={commentText}
            className={cn("comment__text", {
              "comment__text--error": errorText
            })}
            placeholder="Enter your comment"
            maxLength={300}
            onChange={onChangeInput}
          />
          {errorText
            &&
            <div className="comment__error-message">
              At least 3 characters
              </div>
          }
          <button className="tweet-box__tweet-button comment__button">Comment</button>
        </form>
      }
      {comments.length !== 0
        &&
        <div className="comment__list">
          <h2>Comments:</h2>
          {comments.map(({ id, text }) => (
            <p key={id} className="comment__item">
              {text}
            </p>
          ))}
        </div>
      }
    </div>
  );
}

export default Comments;
