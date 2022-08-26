import React, { useState, useEffect } from 'react';
// removed useHistory for now
import AdminSidebar from './AdminSidebar';
import '../../../styles/index.less';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { Layout } from 'antd';
import CourseCard from './AdminCourseCard';
import AdminAddCourses from '../AdminAddCourse';

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
  {
    course_id: 3,
    course_name: 'Intro to CSS',
    instructor: 'Mark Smith',
    program_name: 'CoderSitters',
    date: '12/01/2023',
  },
  {
    course_id: 4,
    course_name: 'Intro to HTML',
    instructor: 'Jane Doe',
    program_name: 'CoderCamp',
    date: '12/01/2023',
  },
  {
    course_id: 5,
    course_name: 'Intro to HTML',
    instructor: 'Another Person',
    program_name: 'CoderYoga',
    date: '12/01/2023',
  },
  {
    course_id: 6,
    course_name: 'Intro to React',
    instructor: 'Jane Doe',
    program_name: 'CoderSitters',
    date: '12/01/2023',
  },
];

export default function AdminCourses() {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [courses, setCourses] = useState(initialCoursesState);

  useEffect(() => {
    axiosWithAuth(idToken)
      .get(`${URL}/courses`)
      .then(res => {
        setCourses(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // const history = useHistory();

  // const handleClick = () =>{
  //   history.push('/admin-add-course');
  // };

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div class="table-container">
          <div class="header-container">
            <h1>Courses</h1>
          </div>
          <div class="courses-right">
            <button className="add-course">ADD COURSE</button>
          </div>
          {/*  onClick={<AdminAddCourses />} put back in button click */}
          <div className="admin-courses-container">
            {courses.map(item => (
              <CourseCard key={item.course_id} course={item} />
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  );
}
