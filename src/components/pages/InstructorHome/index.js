import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import { Layout, Row, Col } from 'antd';
import { ThunderboltFilled, ScheduleOutlined } from '@ant-design/icons';
import Banner from '../../common/Banner';

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
            <div className="calendar">
              <InstructorCalender />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default InstructorHome;
