import React from 'react';
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import AdminSidebar from '../AdminHome/AdminSidebar';
import AdminEditCourseForm from './AdminEditCourseForm';

const AdminEditCourse = () => {
  return (
    <div className="edit-course-page">
      <AdminSidebar />
      <AdminEditCourseForm />
    </div>
  );
};

export default AdminEditCourse;
