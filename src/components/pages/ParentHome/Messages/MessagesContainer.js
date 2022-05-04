import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import MessagingInterface from './MessagingInterface';
import ConversationList from './ConversationList';
import '../../../../styles/ParentStyles/index.less';

function ParentMessages() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar />
      <Content>
        <Banner />
        <ConversationList />
        <MessagingInterface />
      </Content>
    </Layout>
  );
}

export default ParentMessages;
