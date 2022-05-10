import React from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import ParentNavbar from '../ParentHome/ParentNavbar';
import { Layout } from 'antd';
import ParentBookingContainer from './ParentBookingContainer';

function ParentBooking() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar active="courses" />
      <Content>
        <Banner />
        <ParentNavbar />
        <div>
          <ParentBookingContainer />
        </div>
      </Content>
    </Layout>
  );
}

export default ParentBooking;
