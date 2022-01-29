import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import TitleParentNewsFeed from './TitleParentNewsFeed';
const { Content } = Layout;

export default function ParentNewsFeed() {
  return (
    <div className="news-feed-page">
      <Layout>
        <ParentSidebar />
        <Content>
          <Banner />
          <TitleParentNewsFeed />
          <NewsContainer />
        </Content>
      </Layout>
    </div>
  );
}
