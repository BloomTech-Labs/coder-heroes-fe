import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import '../../../styles/index.less';
import {getNewsFeeds} from '../../../redux/actions/instructorActions';
import IndividualNews from './IndividualNews';
import { useOktaAuth } from '@okta/okta-react';
import { getAuthHeader } from '../../../api/index';
function NewsContainer(props) {
  const { setPostId, setPostOptions, newsfeed, dispatch }=props;
  const { authState } = useOktaAuth();
  useEffect(() => {
    const token = {
      headers: getAuthHeader(authState),
    };
    dispatch(getNewsFeeds(token));
  }, [dispatch]);

  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, newsfeed_id } = news;
        return (
          <div className="news-card" key={newsfeed_id}>
            <div className="title-container">
              <h1>{title}</h1>
            </div>
            <div className="description">
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
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return { newsfeed: state.instructorReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);