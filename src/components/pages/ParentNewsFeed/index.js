import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import ParentSidebar from '../ParentHome/ParentSidebar';
import TitleParentNewsFeed from './TitleParentNewsFeed';
const { Content } = Layout;

const ParentNewsFeed = () => {
  return (
    <div className="news-feed-page">
      <ParentSidebar active="newsfeed" />
      <Content>
        <TitleParentNewsFeed />
        <NewsContainer />
      </Content>
    </div>
  );
};

export default ParentNewsFeed;
