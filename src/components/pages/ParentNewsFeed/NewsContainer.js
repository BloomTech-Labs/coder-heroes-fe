import React,{ useEffect } from 'react';
import '../../../styles/index.less';
import IndividualNewsParent from './IndividualNewsParent';
import { connect } from 'react-redux';
import { getNewsFeedsParent } from '../../../redux/actions/parentActions';
import { useOktaAuth } from '@okta/okta-react';//this line can be deleted after PR130 merge
import { getAuthHeader } from '../../../api/index'; //this line can be deleted after PR130 merge

function NewsContainer(props) {
  const {newsfeed, dispatch}=props;
  const { authState } = useOktaAuth(); //this line can be deleted after PR130 merge
  useEffect(() => {
    const token = {//this line can be deleted after PR130 merge
      headers: getAuthHeader(authState),//this line can be deleted after PR130 merge
    };//this line can be deleted after PR130 merge
    dispatch(getNewsFeedsParent(token)); //token can be removed from param
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