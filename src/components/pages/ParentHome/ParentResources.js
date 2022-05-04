import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Carousel } from 'antd';
import 'antd/dist/antd.css';

const ParentResourcesPage = () => {
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Banner />
      <Carousel />
    </Layout>
  );
};

export default ParentResourcesPage;
