import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';

const { Content } = Layout;

export default function ParentNewsFeed() {
  return (
    <div className="news-feed-page">
      <Layout>
        <ParentSidebar />
        <Content>
          <Banner />
          <div className="news-feed-title-container">
            <h1 className="news-feed-title">News Feed</h1>
          </div>
          <NewsContainer />
        </Content>
      </Layout>
    </div>
  );
}
