import React from 'react';

export default function Title({ setPostOptions }) {
  return (
      <div className="news-feed-title-container-instructor">
        <div id="news-feed-title">
          <h1>News Feed</h1>
        </div>
        <div id="create-news-button">
          <button
            onClick={() => {
              setPostOptions('createNewPost');
            }}
          >
            Create Post
          </button>
        </div>
      </div>
  );
}
