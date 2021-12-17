import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import InstructorBookingCards from './InstructorBookingCards';

const { Content } = Layout;
function InstructorBooking() {
  return (
    <Layout>
      <InstructorSidebar />
      <Content>
        <Banner />
        <InstructorBookingCards />
      </Content>
    </Layout>
  );
}

export default InstructorBooking;
