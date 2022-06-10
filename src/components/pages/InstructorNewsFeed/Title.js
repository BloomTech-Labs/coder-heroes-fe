import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { setPostOptions } from '../../../redux/actions/instructorActions.js';

function Title(props) {
  const dispatch = useDispatch();

  return (
    <div className="news-feed-title-container-instructor">
      <div id="news-feed-title">
        <h1>News Feed</h1>
      </div>
      <div id="create-news-button">
        <button
          onClick={() => {
            dispatch(setPostOptions('createNewPost'));
          }}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { postOptions: state.instructorReducer.postOptions };
};
export default connect(mapStateToProps)(Title);
