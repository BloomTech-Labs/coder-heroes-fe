import React, { useState } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import InstructorBookingCards from './InstructorBookingCards';

function InstructorBooking() {
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
        <InstructorSidebar />
      </Sider>
      <Content>
        <Banner />
        <InstructorBookingCards />
      </Content>
    </Layout>
  );
}

export default InstructorBooking;
