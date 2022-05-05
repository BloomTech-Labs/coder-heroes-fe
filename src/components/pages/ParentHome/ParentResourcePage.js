import React from 'react';
import Banner from '../../common/Banner';
<<<<<<< HEAD:src/components/pages/ParentHome/ParentResourcePage.js
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const ParentResourcesPage = () => {
=======
import ParentSidebar from './ParentSidebar';
import ParentNavbar from './ParentNavbar';
import StudentDropdown from './StudentDropdown';
import '../../../styles/ParentStyles/dashboard.less';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const ParentDashboard = () => {
  const { Content } = Layout;

>>>>>>> 6d07931 (added parent nav bar into mission control):src/components/pages/ParentHome/parentDashboard.js
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

export default ParentResourcesPage;
