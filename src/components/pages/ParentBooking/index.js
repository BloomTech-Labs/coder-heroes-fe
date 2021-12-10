import React, { useState } from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import ParenBookingContainer from './ParentBookingContainer';

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
        {/* not sure if this is still needed */}
        {/* <div className="bookingBtn">
          <p>Continue To Review Booking</p>
        </div> */}
        <div>
          <ParenBookingContainer />
        </div>
      </Content>
    </Layout>
  );
}

export default ParentBooking;
