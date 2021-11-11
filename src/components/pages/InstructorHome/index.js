import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import InstructorProfile from './InstructorProfile';
import { Layout, Row, Col } from 'antd';
import { ThunderboltFilled, ScheduleOutlined } from '@ant-design/icons';
import Banner from '../../common/Banner';
import InstructorCourseManagement from './InstructorCourseManagement';

const { Content, Sider } = Layout;
const InstructorHome = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div>
      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <InstructorSidebar />
        </Sider>
        <Layout>
          <Content>
            <Banner />
            <div className="banner-divs">
              <div className="instructor-find-courses">
                <p> {<ScheduleOutlined />} Find Courses</p>
              </div>
            </div>
            <Row justify="space-around" align="middle">
              <Col span={8}>
                <InstructorCourseManagement />
              </Col>
              <Col span={12}>
                <InstructorCalender />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default InstructorHome;
