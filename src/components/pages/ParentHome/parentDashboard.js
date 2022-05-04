import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout, Progress, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import IndividualNewsParent from '../ParentNewsFeed/IndividualNewsParent';
import ParentCalendar from './ParentCalendar';
const ParentDashboard = () => {
  const { Content } = Layout;
  return (
    <Layout className="dashboard-container">
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <Content>
          <Row className="dashboard-content" gutter={[16, 16]}>
            <Col span={12}>
              <Row gutter={[16, 16]}>
                <IndividualNewsParent />
                <IndividualNewsParent />
                <IndividualNewsParent />
              </Row>
            </Col>
            <Col span={4}>
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
            </Col>
            <Col span={8}>
              <Col className="parent-dashboard-calendar-card" gutter={[16, 16]}>
                <ParentCalendar fullscreen={false} />
              </Col>
              <Row gutter={[16, 16]}>
                <h1>Messages</h1>
              </Row>
            </Col>
          </Row>
        </Content>
      </Content>
    </Layout>
  );
};

export default ParentDashboard;

//  <Col className="column" span={12}>
//             <NewsContainer />
//           </Col>
//         <Row gutter={[16, 16]}>
//           <Col className="column" span={6}>
//             <Progress
//               className="progress-circle"
//               type="circle"
//               gapPosition="top"
//               percent={50}
//             />
//             <Progress
//               className="progress-circle"
//               type="circle"
//               gapPosition="top"
//               percent={75}
//             />
//           </Col>

//           <Col className="parent-dashboard-calendar-card" span={6}>
//             <ParentCalendar fullscreen={false} />
//           </Col>
//         </Row>
