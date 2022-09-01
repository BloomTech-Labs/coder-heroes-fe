import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import FormModal from '../AdminAddCourse/AdminAddCoursesForm';

// Using AntD to pull in a card component to show course details. The course info comes from the parent component AdminCourses with course passed through props. Ability to go directly to course details or course edit from the card page.
export default function CourseCard(props) {
  const { course } = props;
  const history = useHistory();
  const headers = Object.keys(course);

  const handleEditCourse = () => {
    history.push(`/admin-edit-course/${course.course_id}`);
  };

  const viewCourseDetails = id => {
    history.push(`/admin-course-details/${course.course_id}`);
  };

  return (
    <div className="admin-course-card-container">
      <Card title={course.course_name}>
        <h3>
          {headers[17].toUpperCase()}{' '}
          <span className="black">{course.program_name}</span>
        </h3>
        {/*<h3>
          //waiting for BL-899 to be merged to implement
          {headers[18].toUpperCase()} <span className="black">{course.instructor_name}</span>
        </h3>*/}

        <h3>
          {headers[12].toUpperCase() + ' '}
          <span className="black">{course.start_date.substr(0, 10)}</span>
        </h3>

        <div className="courses-button-container">
          <FormModal button_name={'Edit Course'} courseinfo={course} />
          <button className="courses-button" onClick={viewCourseDetails}>
            VIEW COURSE
          </button>
        </div>
      </Card>
    </div>
  );
}
