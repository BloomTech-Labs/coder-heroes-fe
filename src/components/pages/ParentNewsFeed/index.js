import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ParentNavbar from '../ParentHome/ParentNavbar';
import Banner from '../../common/Banner';
const { Content } = Layout;

function ParentNewsFeed() {
  return (
    <Layout className="news-feed-page">
      <ParentSidebar active="newsfeed" />
      <Content>
        <Banner />
        <ParentNavbar />
        <NewsContainer />
      </Content>
    </Layout>
  );
}

export default ParentNewsFeed;
