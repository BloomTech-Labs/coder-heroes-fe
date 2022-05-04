import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ParentNavbar from '../ParentHome/ParentNavbar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const ParentTasks = () => {
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Banner />
      <ParentNavbar />
    </Layout>
  );
};

export default ParentTasks;
