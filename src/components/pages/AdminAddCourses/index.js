import React from 'react';
import AdminAddCoursesForm from './AdminAddCourses';
import AdminCourseFeed from './AdminCourseFeed';
export default function AdminAddCourses() {
  return (
    <div>
      <AdminCourseFeed />
      <AdminAddCoursesForm />
    </div>
  );
}
