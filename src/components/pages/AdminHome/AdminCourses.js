import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import '../../../styles/index.less';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

import CourseCard from './AdminCourseCard';

const initialCoursesState = {};

export default function AdminCourses() {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [courses, setCourses] = useState([initialCoursesState]);

  useEffect(() => {
    axiosWithAuth(idToken)
      .get(`${URL}/courses`)
      .then(res => {
        setCourses(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-courses-container">
      <AdminSidebar />
      {courses.map(item => (
        <CourseCard key={Date.now()} courses={courses} />
      ))}
    </div>
  );
}
