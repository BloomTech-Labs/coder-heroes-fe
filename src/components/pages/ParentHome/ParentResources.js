import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ParentResources = props => {
  return (
    <Layout>
      <ParentSidebar active="dashboard" />
      <Banner />
      <Carousel />
    </Layout>
  );
};

export default ParentResources;
