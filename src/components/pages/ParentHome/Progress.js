import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ProgressBar from '../../common/ProgressBar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { findByLabelText } from '@testing-library/react';

const Progress = () => {
  return (
    <Layout style={{ width: '100%' }}>
      <ParentSidebar active="dashboard" />
      <div className="progress-container">
        <Banner />
        <ProgressBar />
      </div>
    </Layout>
  );
};

export default Progress;
