import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import {
  setPostID,
  setPostOptions,
} from '../../../redux/actions/instructorActions';
function IndividualNews(props) {
  const { newsfeed_id, link, title, description } = props;
  const [showNewsFeedModal, setShowNewsFeedModal] = useState(false);
  const dispatch = useDispatch();

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
            dispatch(setPostID(newsfeed_id, link, title, description));
            dispatch(setPostOptions('editDelete'));
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

const mapStateToProps = state => {
  return { newsfeed: state.instructorReducer.newsfeed };
};
export default connect(mapStateToProps)(IndividualNews);
