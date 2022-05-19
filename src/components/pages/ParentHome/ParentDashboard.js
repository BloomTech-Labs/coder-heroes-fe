import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import StudentDropdown from './StudentDropdown';
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
        <div className="navDrop">
          <ParentNavbar />
          <StudentDropdown />
        </div>
      </Content>
    </Layout>
  );
};

export default ParentDashboard;
