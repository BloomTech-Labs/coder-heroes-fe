import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const AdminHomeContent = () => {
  return (
    <Content>
      <div class="AdminDash">
        <h1>Dashboard</h1>
      </div>
      <div>
        <h2>Recent Courses</h2>
      </div>
      <div>
        <h2>Instructor Applications</h2>
      </div>
    </Content>
  );
};

export default AdminHomeContent;
