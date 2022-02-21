import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import {getNewsFeeds} from '../../../redux/actions/instructorActions';
import IndividualNews from './IndividualNews';

function NewsContainer(props) {
  const { setPostId, setPostOptions, newsfeed, dispatch } = props;
  useEffect(() => {
    dispatch(getNewsFeeds());
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
