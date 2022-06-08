import React, { useState } from 'react';
import { Modal } from 'antd';
function IndividualNews(props) {
  const {
    title,
    link,
    description,
    newsfeed_id,
    setPostOptions,
    setPostId,
  } = props;
  const [showNewsFeedModal, setShowNewsFeedModal] = useState(false);

  return (
    <div
      className="news-card"
      key={newsfeed_id}
      onClick={() => {
        setShowNewsFeedModal(!showNewsFeedModal);
      }}
    >
      <div className="news-title-container">
        <h1>{title}</h1>
      </div>
      <div className="news_description">
        <h3>{description}</h3>
      </div>
      <div className="button-container">
        <a href={link}>Link</a>
        <button
          className="edit-button"
          onClick={() => {
            setPostId(newsfeed_id);
            setPostOptions('editDelete');
          }}
        >
          Edit/Delete Post
        </button>
      </div>
      <Modal
        className="news_card_modal"
        title={title}
        visible={showNewsFeedModal}
        footer={null}
      >
        <p>{description}</p>
      </Modal>
    </div>
  );
}
export default IndividualNews;
