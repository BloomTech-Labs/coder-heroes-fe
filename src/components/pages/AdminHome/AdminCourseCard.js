import React from 'react';
// removed , { useHistory } from above line
import { Card } from 'antd';

export default function CourseCard(props) {
  const { course } = props;
  // const history = useHistory();

  // const handleEditCourse = () =>{
  //   history.push('/admin-add-course');
  // };

  // const viewCourseDetails = (id) =>{
  //   history.push(`/admin-course-details/:id`);
  // };

  return (
    <div className="admin-course-card-container">
      <Card title={course.course_name}>
        <h3>
          Program Name: <span className="black">{course.program_name}</span>
        </h3>
        <h3>
          Instructor: <span className="black">{course.instructor}</span>
        </h3>

        <h3>
          Date: <span className="black">{course.date}</span>
        </h3>

        <div className="courses-button-container">
          <button className="courses-button">EDIT COURSE</button>
          {/* onClick={handleEditCourse} put back in edit course button? */}
          <button className="courses-button">VIEW COURSE</button>
          {/* onClick={viewCourseDetails} put back in view course button? */}
        </div>
      </Card>
    </div>
  );
}
