import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ProgressBar from '../../common/ProgressBar';
import StudentDropdown from './StudentDropdown';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ParentNavbar from './ParentNavbar';

const Progress = () => {
  const { Content } = Layout;

  return (
    <Layout style={{ width: '100%' }}>
      <ParentSidebar active="dashboard" />
      <Content>
        <Banner />
        <div className="navDrop">
          <ParentNavbar />
          <StudentDropdown />
        </div>
        <ProgressBar />
      </Content>
    </Layout>
  );
};

export default Progress;
