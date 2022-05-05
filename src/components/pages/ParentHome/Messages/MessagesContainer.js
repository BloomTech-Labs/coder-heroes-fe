import React from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import MessagingInterface from './MessagingInterface';
import ConversationList from './ConversationList';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';

function ParentMessages() {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar />
      <Content className="messages-container">
        <Banner />
        <Card className="parent-convo-list">
          <ConversationList className="parent-dashboard-msg-list" />
        </Card>
        <Card>
          <MessagingInterface />
        </Card>
      </Content>
    </Layout>
  );
}

export default ParentMessages;
