import React from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import ParentNavbar from '../ParentNavbar';
import '../../../../styles/ParentStyles/messages.less';

function ParentMessages() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar />
      <Content className="content-container">
        <Banner />
        <ParentNavbar />
        <Content className="component-container">
          <div className="card-container">
            <Card className="parent-message-card">
              <MessageList />
            </Card>
            <Card className="parent-message-card">
              <ActiveMessage />
            </Card>
          </div>
        </Content>
      </Content>
    </Layout>
  );
}

export default ParentMessages;
