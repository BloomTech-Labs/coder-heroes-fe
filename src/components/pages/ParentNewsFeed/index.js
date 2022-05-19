import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import IndividualNewsParent from './IndividualNewsParent';
const { Content } = Layout;

function ParentNewsFeed() {
  return (
    <Layout className="news-feed-page">
      <ParentSidebar active="newsfeed" />
      <Content>
        <Banner />
        <IndividualNewsParent />
      </Content>
    </Layout>
  );
}

export default ParentNewsFeed;
