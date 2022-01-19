import React from 'react';
import { Layout } from 'antd';
import '../../../styles/InstructorStyles/index.less';
import NewsContainer from './NewsContainer';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';

const { Content } = Layout;

export default function NewsFeed() {
  console.log('newsFeed is here');
  return (
    <div>
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
