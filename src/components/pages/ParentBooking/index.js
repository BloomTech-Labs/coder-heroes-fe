import React, { useState } from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import ParentBookingContainer from './ParentBookingContainer';

function ParentBooking() {
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
        <ParentSidebar />
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

export default ParentBooking;
