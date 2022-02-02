import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import '../../../styles/index.less';
import {getNewsFeeds} from '../../../redux/actions/instructorActions';
import IndividualNews from './IndividualNews';
import { useOktaAuth } from '@okta/okta-react'; //this line can be deleted after PR130 merge
import { getAuthHeader } from '../../../api/index'; //this line can be deleted after PR130 merge
function NewsContainer(props) {
  const { setPostId, setPostOptions, newsfeed, dispatch }=props;
  const { authState } = useOktaAuth();//this line can be deleted after PR130 merge
  useEffect(() => {
    const token = {//this line can be deleted after PR130 merge
      headers: getAuthHeader(authState),//this line can be deleted after PR130 merge
    };//this line can be deleted after PR130 merge
    dispatch(getNewsFeeds(token));//token parameter can be deleted after PR130 merge
  }, [dispatch]);

  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, newsfeed_id } = news;
        return (
          <IndividualNews
            key={newsfeed_id}
            setPostOptions={setPostOptions}  
            setPostId={setPostId}
            title={title} 
            link={link} 
            description={description} 
            newsfeed_id={newsfeed_id}/>        
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return { newsfeed: state.instructorReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);