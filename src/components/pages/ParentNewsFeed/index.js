import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
const { Content } = Layout;

function ParentNewsFeed() {
  return (
    <Layout className="news-feed-page">
      <ParentSidebar active="newsfeed" />
      <Content>
        <Banner />
        <NewsContainer />
      </Content>
    </Layout>
  );
}

export default ParentNewsFeed;
