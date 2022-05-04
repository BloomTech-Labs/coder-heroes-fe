import React from 'react';
import ParentFamilyHome from '../ParentFamily/ParentFamilyHome';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import ParentDashboard from '../ParentHome/ParentDashboard';
import ParentCalendar from './ParentCalendar';
import ParentBooking from '../ParentBooking/index';
// import ParentNewsFeed from '../ParentNewsFeed/index';
// import Cart from './Cart';
import cloudbg from '../../../img/cloud-bg.jpg';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar active="family" />
      <Content>
        <Banner />
        <ParentFamilyHome />
      </Content>
    </Layout>
  );
}

export default ParentHome;
