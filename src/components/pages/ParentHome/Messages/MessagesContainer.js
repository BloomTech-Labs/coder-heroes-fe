import React from 'react';
import { Layout, Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import ParentNavbar from '../ParentNavbar';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';

function ParentMessages() {
  const { Content } = Layout;

  return (
    <Layout className=".page-container">
      <ParentSidebar />
      <Content className="messages-container">
        <Banner />
        <ParentNavbar />
        <Row gutter={[8, 8]}>
          <Col span={18}>
            <ActiveMessage className="active-message" />
          </Col>
          <Col span={6}>
            <Card>
              <h4>Conversations</h4>
              <MessageList className="message-list" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default ParentMessages;
