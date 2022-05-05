import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ProgressBar from '../../common/ProgressBar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ParentNavbar from './ParentNavbar';

const Progress = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <ParentNavbar className="parent-navbar" />
        <ProgressBar />
      </Content>
    </Layout>
  );
};

export default Progress;
