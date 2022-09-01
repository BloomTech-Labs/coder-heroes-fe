import React from 'react';
import CourseCard from './CourseCard';
import ApplicationCard from './ApplicationCard';
import { Layout } from 'antd';
import '../../../styles/AdminDashboardHome/index.less';

const { Content } = Layout;

const AdminHomeContent = () => {
  return (
    <Content>
      <div class="AdminDash">
        <h1>Dashboard</h1>
      </div>
      <div class="AdminDashHeaders">
        <div class="container courses">
          <h2>Recent Courses</h2>
          <a href="/courses">See All</a>
        </div>
        <div class="container applications">
          <h2>Instructor Applications</h2>
          <a href="/instructors">See All</a>
        </div>
      </div>
      <div class="AdminDashContent">
        <div class="container2 courses">
          <CourseCard />
        </div>
        <div class="container2 applications">
          <ApplicationCard />
        </div>
      </div>
    </Content>
  );
};

export default AdminHomeContent;
