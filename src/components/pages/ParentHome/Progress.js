import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ProgressBar from '../../common/ProgressBar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { findByLabelText } from '@testing-library/react';
import ParentNavbar from './ParentNavbar';

const Progress = () => {
  const { Content } = Layout;
  return (
    <Layout style={{ width: '100%' }}>
      <ParentSidebar active="dashboard" />
      <Content className="progress-container">
        <Banner />
        <ParentNavbar />
        <ProgressBar />
      </Content>
    </Layout>
  );
};

export default Progress;
