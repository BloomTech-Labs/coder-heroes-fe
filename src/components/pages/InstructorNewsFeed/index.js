import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import NewsfeedPutModal from './NewsFeedPutModal';
import NewsfeedPostModal from './NewsFeedPostModal';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';
import Title from './Title';
import { connect } from 'react-redux';
const { Content } = Layout;

function InstructorNewsFeed(props) {
  const { postOptions } = props;

  return (
    <div className="news-feed-page">
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          {/* depending on the postOptions state it will conditional render components newsFeed, editDelete, createNewPost*/}
          {postOptions === 'newsFeed' ? (
            <div>
              <Title />
              <NewsContainer />
            </div>
          ) : (
            ''
          )}
          {postOptions === 'editDelete' ? (
            <div className="newsfeed_put_post_form_container">
              <NewsfeedPutModal />
            </div>
          ) : (
            ''
          )}
          {postOptions === 'createNewPost' ? (
            <div className="newsfeed_put_post_form_container">
              <NewsfeedPostModal />
            </div>
          ) : (
            ''
          )}
        </Content>
      </Layout>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    newsfeed: state.instructorReducer.newsfeed,
    postOptions: state.instructorReducer.postOptions,
  };
};
export default connect(mapStateToProps)(InstructorNewsFeed);
