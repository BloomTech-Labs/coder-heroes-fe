import React from 'react';
import ParentSidebar from '../ParentHome/ParentSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import ParentBookingContainer from './ParentBookingContainer';
import '../../../styles/ParentStyles/booking.less';

function ParentBooking() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar active="courses" />
      <Content>
        <Banner />

        <ParentBookingContainer className="booking-container" />
      </Content>
    </Layout>
  );
}

export default ParentBooking;
