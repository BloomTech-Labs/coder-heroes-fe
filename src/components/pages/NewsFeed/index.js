import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';

const { Content } = Layout;

export default function NewsFeed() {
  return (
    <div className="news-feed-page">
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          <NewsContainer />
        </Content>
      </Layout>
    </div>
  );
}
