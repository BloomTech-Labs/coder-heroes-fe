import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import AdminSidebar from './AdminSidebar';
import AdminHomeContent from './AdminHomeContent';
import { Layout } from 'antd';

const AdminHome = () => {
  return (
    <Layout>
      <AdminSidebar />
      <AdminHomeContent />
    </Layout>
  );
};

export default AdminHome;
