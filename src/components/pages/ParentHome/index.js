import React from 'react';
import ParentFamilyHome from '../ParentFamily/ParentFamilyHome';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ParentNavbar from './ParentNavbar';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content } = Layout;

  return (
    <Layout>
      <Banner />
      <ParentFamilyHome />
    </Layout>
  );
}

export default ParentHome;
