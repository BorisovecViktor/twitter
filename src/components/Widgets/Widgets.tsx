import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import * as store from '../../store';

import './Widgets.scss';

import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from 'react-twitter-embed';

const Widgets = () => {
  const isWidgetsVisible = useSelector(store.getIsWidgetsVisible);

  return (
    <div className={cn("widget", {
      "widget--active": isWidgetsVisible
    })}>
      <h2 className="widget__title">What's happening</h2>

      <TwitterTweetEmbed tweetId={"1159602037232791552"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="reactjs"
        options={{ height: 300 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/PalvinBarbie"}
        options={{ text: "#reactjs is awesome", via: "PalvinBarbie" }}
      />
    </div>
  );
}

export default Widgets;
