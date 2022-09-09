import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';

// Using AntD to pull in a card component to show course details. The course info comes from the parent component AdminCourses with course passed through props. Ability to go directly to course details or course edit from the card page.
export default function CourseCard(props) {
  const { course } = props;
  const history = useHistory();

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
          Program Name: <span className="black">{course.program_name}</span>
        </h3>
        <h3>
          Instructor: <span className="black">{course.instructor_id}</span>
        </h3>

        <h3>
          Start Date:{' '}
          <span className="black">{course.start_date.substr(0, 10)}</span>
        </h3>

        <div className="courses-button-container">
          <button className="courses-button" onClick={handleEditCourse}>
            EDIT COURSE
          </button>
          <button className="courses-button" onClick={viewCourseDetails}>
            VIEW COURSE
          </button>
        </div>
      </Card>
    </div>
  );
}
