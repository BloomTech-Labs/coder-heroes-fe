import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { getNewsFeeds } from '../../../redux/actions/instructorActions';
import IndividualNews from './IndividualNews';
import { useOktaAuth } from '@okta/okta-react';

function NewsContainer(props) {
  const { newsfeed, dispatch } = props;
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  useEffect(() => {
    console.log('newsfeed:', newsfeed);
    dispatch(getNewsFeeds(idToken));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getNewsFeeds(idToken));
    }, 100);
    return () => clearTimeout(timer);
  }, [props.newsRequest]);

  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, newsfeed_id } = news;
        return (
          <IndividualNews
            key={newsfeed_id}
            // setPostOptions={setPostOptions}
            // setPostId={setPostId}
            title={title}
            link={link}
            description={description}
            newsfeed_id={newsfeed_id}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    newsfeed: state.instructorReducer.newsfeed,
    newsRequest: state.instructorReducer.newsRequest,
  };
};
export default connect(mapStateToProps)(NewsContainer);
