import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import './../../../styles/ParentStyles/index.less';

function ParentMessages() {
  const { Content } = Layout;

  return (
    <Layout>
      {/* <ParentSidebar /> */}
      <Content>{/* <Banner /> */}</Content>
    </Layout>
  );
}

export default ParentMessages;
