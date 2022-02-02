import React,{ useEffect } from 'react';
import '../../../styles/index.less';
import IndividualNewsParent from './IndividualNewsParent';
import { connect } from 'react-redux';
import { getNewsFeedsParent } from '../../../redux/actions/parentActions';
import { useOktaAuth } from '@okta/okta-react';
import { getAuthHeader } from '../../../api/index';

function NewsContainer(props) {
  const {newsfeed, dispatch}=props;
  const { authState } = useOktaAuth();
  useEffect(() => {
    const token = {
      headers: getAuthHeader(authState),
    };
    dispatch(getNewsFeedsParent(token));
  }, [dispatch]);

  return (
    <div>
      <div className="news-container">
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
    </div>
  );
}
const mapStateToProps = state => {
  return { newsfeed: state.parentReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);