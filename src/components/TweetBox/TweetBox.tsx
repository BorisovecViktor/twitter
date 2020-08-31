import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import './TweetBox.scss';
import { Avatar } from '@material-ui/core';
import { avatarImg, currentUser } from '../../constants';
import { addPost } from '../../store/posts';

const TweetBox = () => {
  const [postText, setPostText] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const [errorText, setErrorText] = useState(false);
  const [errorUrl, setErrorUrl] = useState(false);
  const dispatch = useDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText(false);
    setErrorUrl(false);

    switch (e.target.name) {
      case 'post-text': setPostText(e.target.value);
        break;
      case 'post-url': setPostUrl(e.target.value);
        break;
      default: ;
    }
  }

  const handleSubmitNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postText.length < 3) {
      return setErrorText(true);
    }

    if (postUrl !== '' && !postUrl.startsWith('https://')) {
      return setErrorUrl(true);
    }

    dispatch(addPost({
      ...currentUser,
      id: uuidv4(),
      text: postText,
      image: postUrl,
      comments: [],
    }));
    setPostText('');
    setPostUrl('');
  }

  return (
    <div className="tweet-box">
      <form action="#" className="tweet-box__form" onSubmit={handleSubmitNewPost}>
        <div className="tweet-box__container">
          <Avatar src={avatarImg} />
          <input
            type="text"
            name="post-text"
            value={postText}
            className={cn("tweet-box__text", {
              "tweet-box__text--error": errorText
            })}
            placeholder="What's happening"
            maxLength={300}
            onChange={onChangeInput}
          />
          {errorText
            &&
            <div className="tweet-box__text--error-message">
              At least 3 characters
            </div>
          }
        </div>
        <div className="tweet-box__container">
          <input
            type="text"
            name="post-url"
            value={postUrl}
            className={cn("tweet-box__text tweet-box__text--url", {
              "tweet-box__url--error": errorUrl
            })}
            placeholder="Optional: Enter image URL"
            onChange={onChangeInput}
          />
          {errorUrl
            &&
            <div className="tweet-box__url--error-message">
              Should start with https://
          </div>
          }
        </div>
        <button className="tweet-box__tweet-button">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
