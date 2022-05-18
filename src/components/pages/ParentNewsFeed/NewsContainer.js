import React, { useEffect } from 'react';
import '../../../styles/index.less';
import IndividualNewsParent from './IndividualNewsParent';
import { connect } from 'react-redux';
import { getNewsFeedsParent } from '../../../redux/actions/parentActions';
import { useOktaAuth } from '@okta/okta-react';

function NewsContainer(props) {
  const { newsfeed, dispatch } = props;
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  useEffect(() => {
    dispatch(getNewsFeedsParent(idToken));
  }, [dispatch, idToken]);

  return (
    <div className="news-container">
      <IndividualNewsParent className="news-article" />
      <IndividualNewsParent
        className="
        news-article"
      />
      {newsfeed.map(news => {
        const { title, link, description, id } = news;
        return (
          <IndividualNewsParent
            key={id}
            title={title}
            link={link}
            description={description}
            newsfeed_id={id}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return { newsfeed: state.parentReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);
