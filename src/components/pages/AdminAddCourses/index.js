import React from 'react';
import AdminAddCoursesForm from './AdminAddCourses';
import AdminCourseFeed from './AdminCourseFeed';
import '../../../styles/index.less';
export default function AdminAddCourses() {
  return (
    <div className="add-courses-container">
      <AdminCourseFeed />
      <AdminAddCoursesForm />
    </div>
  );
}
