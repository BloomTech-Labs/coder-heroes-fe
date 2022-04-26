import React, { useState } from 'react';
import StudentSidebar from '../../pages/StudentHome/StudentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import ParentBookingContainer from './ParentBookingContainer';

function StudentPortal() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        theme="light"
      >
        <StudentSidebar />
      </Sider>
      <Content>
        <Banner />
        <div>
          <ParentBookingContainer />
        </div>
      </Content>
    </Layout>
  );
}

export default StudentPortal;
