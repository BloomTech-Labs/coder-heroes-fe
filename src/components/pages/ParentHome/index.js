import React from 'react';
import ParentFamilyHome from '../ParentFamily/ParentFamilyHome';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar active="family" />
      <Content>
        <Banner />
        <ParentFamilyHome />
      </Content>
    </Layout>
  );
}

export default ParentHome;
