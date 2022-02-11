import React from 'react';
import AdminSidebar from '../AdminHome/AdminSidebar';
import AdminAddCoursesForm from './AdminAddCourses';
import '../../../styles/index.less';
export default function AdminAddCourses() {
  return (
    <div className="admin-courses-container">
      <AdminSidebar />
      <div className="add-courses-container">
        <AdminAddCoursesForm />
      </div>
    </div>
  );
}
