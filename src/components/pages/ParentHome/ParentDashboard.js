import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const ParentDashboard = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <ParentNavbar />
      </Content>
    </Layout>
  );
};

export default ParentDashboard;
