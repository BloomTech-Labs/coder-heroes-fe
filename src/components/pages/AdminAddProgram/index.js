import React from 'react';
import AdminSidebar from '../AdminHome/AdminSidebar';
import AdminAddCoursesPage from './AdminAddProgramsPage';
import '../../../styles/AdminAddProgramStyles/index.less';

export default function AdminAddCourses() {
  return (
    <div className="admin-courses-container">
      <AdminSidebar />
      <div className="add-courses-container">
        <AdminAddCoursesPage />
      </div>
    </div>
  );
}
