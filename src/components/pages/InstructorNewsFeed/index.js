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
  // newsFeed, editDelete, createNewPost
  console.log('changes state', postOptions);
  if (postOptions === 'newsFeed') {
    return (
      <div className="news-feed-page">
        <Layout>
          <InstructorSidebar />
          <Content>
            <Banner />
            <Title setPostOptions={setPostOptions} />
            <NewsContainer setPostOptions={setPostOptions} />
          </Content>
        </Layout>
      </div>
    );
  } else if (postOptions === 'editDelete') {
    return (
      <div className="news-feed-page">
        <Layout>
          <InstructorSidebar />
          <Content>
            <Banner />
            <NewsfeedPutModal setPostOptions={setPostOptions} />
          </Content>
        </Layout>
      </div>
    );
  } else {
    return (
      <div className="news-feed-page">
        <Layout>
          <InstructorSidebar />
          <Content>
            <Banner />
            <NewsfeedPostModal setPostOptions={setPostOptions} />
          </Content>
        </Layout>
      </div>
    );
  }
}
