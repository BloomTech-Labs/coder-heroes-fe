import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Carousel } from 'antd';
import 'antd/dist/antd.css';

const ParentResourcesPage = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Banner />
      <Content>
        <Carousel />
      </Content>
    </Layout>
  );
};

export default ParentResourcesPage;
