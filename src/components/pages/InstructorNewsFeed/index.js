import React, { useState } from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import NewsfeedPutModal from './NewsFeedPutModal';
import NewsfeedPostModal from './NewsFeedPostModal';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';
import Title from './Title';
const { Content } = Layout;

export default function InstructorNewsFeed() {
  const [postOptions, setPostOptions] = useState('newsFeed');
  const [postID, setPostId] = useState(0);

  return (
    <div className="news-feed-page">
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          {/* depending on the postOptions state it will conditional render components newsFeed, editDelete, createNewPost*/}
          {postOptions === 'newsFeed' ? (
            <div>
              <Title setPostOptions={setPostOptions} />
              <NewsContainer
                setPostId={setPostId}
                setPostOptions={setPostOptions}
              />
            </div>
          ) : (
            ''
          )}
          {postOptions === 'editDelete' ? (
            <div className="newsfeed_put_post_form_container">
              <NewsfeedPutModal
                postID={postID}
                setPostOptions={setPostOptions}
              />
            </div>
          ) : (
            ''
          )}
          {postOptions === 'createNewPost' ? (
            <div className="newsfeed_put_post_form_container">
              <NewsfeedPostModal setPostOptions={setPostOptions} />
            </div>
          ) : (
            ''
          )}
        </Content>
      </Layout>
    </div>
  );
}
