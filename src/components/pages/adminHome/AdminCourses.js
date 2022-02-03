import React from 'react';
import AdminSidebar from '../AdminHome/AdminSidebar';
import AdminCourseFeed from '../../pages/AdminAddCourses/AdminCourseFeed';
import '../../../styles/index.less';
export default function AdminCourses() {
  return (
    <div className="admin-courses-container">
      <AdminSidebar />
      <div className="add-courses-container">
        <AdminCourseFeed />
      </div>
    </div>
  );
}
