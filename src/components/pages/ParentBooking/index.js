import React, { useState } from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import AvailableCourses from '../ParentBooking/AvailableCourses';

function ParentBooking() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
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
        <div className="bookingBtn">
          <p>Continue To Review Booking</p>
        </div>
        <div>
          <AvailableCourses></AvailableCourses>
        </div>
      </Content>
    </Layout>
  );
}

export default ParentBooking;
