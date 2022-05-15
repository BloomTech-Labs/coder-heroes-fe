import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from '../../pages/ParentHome/ParentSidebar';
import ParentNavbar from '../../pages/ParentHome/ParentNavbar';

import './../../../styles/ParentStyles/index.less';

function ParentAchievements() {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar />
      <Content>
        <Banner />
        <ParentNavbar />
      </Content>
    </Layout>
  );
}

export default ParentAchievements;
