import React from 'react';
import AdminSidebar from '../AdminHome/AdminSidebar';
import { Layout } from 'antd';
import '../../../styles/AdminStyles/index.less';
import AdminApplicationsContainer from './AdminApplicationContainer';

export default function AdminApplications() {
  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />

      <Content>
        <AdminApplicationsContainer />
      </Content>
    </Layout>
  );
}
