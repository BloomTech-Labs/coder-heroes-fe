import React, { useState } from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import { Layout } from 'antd';

const ParentFamilyHome = () => {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Banner />
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        theme="light"
      ></Sider>
      <ParentSidebar />
    </Layout>
  );
};

export default ParentFamilyHome;
