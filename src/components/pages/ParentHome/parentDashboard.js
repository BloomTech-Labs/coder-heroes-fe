import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import IndividualNewsParent from '../ParentNewsFeed/IndividualNewsParent';
import ParentMessages from '../ParentHome/ParentMessages';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout, Progress, Col, Row, Calendar, Card } from 'antd';
import 'antd/dist/antd.css';

const ParentDashboard = () => {
  const { Content } = Layout;
  return (
    <Layout className="dashboard-container">
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <Content>
          <Row className="dashboard-content" gutter={[16, 16]}>
            <Col span={10}>
              <Card>
                <h2>NewsFeed</h2>
                <Row gutter={[16, 16]}>
                  <IndividualNewsParent />
                  <IndividualNewsParent />
                </Row>
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <h2>Progress Report</h2>
                <Progress
                  className="progress-circle"
                  type="circle"
                  gapPosition="top"
                  percent={50}
                />
                <Progress
                  className="progress-circle"
                  type="circle"
                  gapPosition="top"
                  percent={75}
                />
              </Card>
              <Card>
                <h2>Newest Achievement</h2>
              </Card>
            </Col>
            <Col span={8}>
              <Row gutter={[16, 16]}>
                <Card>
                  <h2>Upcoming Courses</h2>
                  <Calendar
                    className="parent-dashboard-calendar-card"
                    fullscreen={false}
                  />
                </Card>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card>
                    <h2>Messages</h2>
                    <ParentMessages />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Content>
    </Layout>
  );
};

export default ParentDashboard;
