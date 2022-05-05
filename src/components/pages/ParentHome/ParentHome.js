import React from 'react';
import ParentFamilyHome from '../ParentFamily/ParentFamilyHome';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  return (
    <Layout>
      <Banner />
      <ParentFamilyHome />
    </Layout>
  );
}

export default ParentHome;
