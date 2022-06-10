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
    dispatch(getNewsFeeds(idToken));
  }, []);

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
  return { newsfeed: state.instructorReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);
