import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const ParentDashboard = () => {
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Banner />
    </Layout>
  );
};

export default ParentDashboard;
