import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { getNewsFeeds } from '../../../redux/actions/instructorActions';
import IndividualNews from './IndividualNews';

//TO-DO: Implement Auth0
function NewsContainer(props) {
  const { newsfeed, dispatch } = props;

  //Should be able to un-comment these lines when Auth0 is implemented
  // const { idToken } = authState;

  // useEffect(() => {
  //   dispatch(getNewsFeeds(idToken));
  // }, []);

  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, newsfeed_id, posted_at } = news;
        return (
          <IndividualNews
            key={newsfeed_id}
            title={title}
            link={link}
            description={description}
            newsfeed_id={newsfeed_id}
            posted_at={posted_at}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    newsfeed: state.instructorReducer.newsfeed,
    post: state.instructorReducer.post,
  };
};
export default connect(mapStateToProps)(NewsContainer);
