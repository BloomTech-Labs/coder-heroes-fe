import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import IndividualNewsParent from '../ParentNewsFeed/IndividualNewsParent';
import MessageList from './Messages/MessageList';
import ParentNavbar from './ParentNavbar';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout, Col, Row, Calendar, Card } from 'antd';
import 'antd/dist/antd.css';

const ParentDashboard = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <div className="navDrop">
          <ParentNavbar />
        </div>
        <Content className="dashboard-container">
          <Row className="row">
            <Col className="parent-dashboard-column" span={10}>
              <Row className="row">
                <Card className="dashboard-card ">
                  <h2>NewsFeed</h2>
                  <Row className="row">
                    <IndividualNewsParent />
                    <IndividualNewsParent />
                  </Row>
                </Card>
              </Row>
            </Col>
            <Col>
              <Row className="row">
                <Card className="dashboard-card ">
                  <h2>Messages</h2>
                  <MessageList />
                </Card>
              </Row>
            </Col>
          </Row>
        </Content>
      </Content>
    </Layout>
  );
};

export default ParentDashboard;
