import React from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';

function ParentMessages() {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar />
      <Content>
        <Banner />
        <div className="messages-container">
          <Card className="msg-list-card">
            <MessageList />
          </Card>
          <Card className="active-msg-card">
            <ActiveMessage />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default ParentMessages;
