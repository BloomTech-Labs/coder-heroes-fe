import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminCourseFeed from '../AdminAddCourses/AdminCourseFeed';
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
