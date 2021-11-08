import React from 'react';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import InstructorProfile from './InstructorProfile';
import { Layout, Row, Col } from 'antd';
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';

const { Content, Sider } = Layout;
const InstructorHome = () => {
  return (
    <div>
      <Layout>
        <Sider>
          <InstructorSidebar />
        </Sider>
        <Layout>
          <Content>
            <Row justify="space-around" align="middle">
              <Col span={12}>
                <InstructorCalender />
              </Col>
              <Col span={3}>
                <InstructorProfile />
              </Col>
              <Col span={1}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default InstructorHome;
