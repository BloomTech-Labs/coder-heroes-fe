import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import '../../../styles/index.less';
import { connect } from 'react-redux';
import CourseCard from './AdminCourseCard';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';

const initialCoursesState = [
  {
    course_id: 1,
    course_name: 'Intro to JS',
    instructor: 'John Doe',
    program_name: 'CoderYoga',
    date: '12/01/2023',
  },
  {
    course_id: 2,
    course_name: 'Intro to Python',
    instructor: 'Jane Doe',
    program_name: 'CoderSitters',
    date: '12/01/2023',
  },
];

function AdminCourses(props) {
  const { courses } = props;
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  return (
    <div className="admin-courses-container">
      <AdminSidebar />
      {courses.map(item => (
        <CourseCard key={item.course_id} course={item} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    courses: state.coursesReducer.courses,
  };
};

export default connect(mapStateToProps, {})(AdminCourses);
