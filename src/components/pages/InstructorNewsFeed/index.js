import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import NewsContainer from './NewsContainer';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';
import Title from './Title';

const { Content } = Layout;

export default function InstructorNewsFeed() {
  return (
    <div className="news-feed-page">
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          <Title />
          <NewsContainer />
        </Content>
      </Layout>
    </div>
  );
}
