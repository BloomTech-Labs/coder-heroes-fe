import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import IndividualNewsParent from '../ParentNewsFeed/IndividualNewsParent';
import MessageList from './Messages/MessageList';
import ParentNavbar from './ParentNavbar';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout, Progress, Col, Row, Calendar, Card } from 'antd';
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
                <Card className="dashboard-card achievement">
                  <h2>Newest Achievement</h2>
                  <svg
                    width="201"
                    height="200"
                    viewBox="0 0 406 405"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M207.242 43.2124L333.819 129.896L333.601 275.395L206.777 360.212L72.0441 275.012L72.2573 129.514L207.242 43.2124Z"
                      fill="#096A70"
                    />
                    <path
                      d="M171.601 223.785L171.247 223.573L171.601 223.785ZM171.601 223.785L171.686 223.836L171.601 223.785Z"
                      fill="#FAF9F8"
                      stroke="#FAF9F8"
                      stroke-width="50"
                    />
                    <path
                      d="M240.147 160.945L239.942 160.52L240.147 160.945ZM240.147 160.945L240.241 161.139L240.147 160.945Z"
                      fill="#FAF9F8"
                      stroke="#FAF9F8"
                      stroke-width="20"
                    />
                    <path
                      d="M223.217 126.03L184.795 268.873"
                      stroke="#FAF9F8"
                      stroke-width="5"
                    />
                  </svg>
                </Card>
              </Row>
            </Col>

            <Col className="parent-dashboard-column" span={8}>
              <Row className="row">
                <Card className="dashboard-card">
                  <h2>Upcoming Courses</h2>
                  <Calendar className="dashboard-calendar" fullscreen={false} />
                </Card>
              </Row>

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
