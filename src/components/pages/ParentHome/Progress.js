import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ProgressBar from '../../common/ProgressBar';
import StudentDropdown from './StudentDropdown';
import '../../../styles/ParentStyles/index.less';
import { Layout, Content } from 'antd';
import 'antd/dist/antd.css';
import ParentNavbar from './ParentNavbar';

const Progress = () => {
  const { Content } = Layout;
<<<<<<< HEAD
  return (
    <Layout style={{ width: '100%' }}>
      <ParentSidebar active="dashboard" />
      <Content className="progress-container">
=======

  return (
    <Layout style={{ width: '100%' }}>
      <ParentSidebar active="dashboard" />
      <Content>
>>>>>>> 0d2f0d6 (cleaned up sidebar, added student dropdown and styling to progress page and fixed routing of profile picture to the new family route)
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
