import React from 'react';
import { Card } from 'antd';
import '../../../styles/InstructorStyles/index.less';
import { connect } from 'react-redux';

const CourseDetails = props => {
  //state attached to instructor dummy data
  console.log(props);
  const { course } = props;
  return (
    <div>
      <Card id="ant-card-course">
        <div id="course-content">
          <h2>{course.subject}</h2>
          <p>
            {course.start_date.split('-')[0]}/{course.start_date.split('-')[1]}{' '}
            @ {course.start_time} - {course.end_time}
          </p>
          <p>
            Syllabus:{' '}
            <a href={course.syllabus} target="_blank" rel="noreferrer">
              Click Here
            </a>
          </p>
          <p>more info here</p>
          <p>more info here</p>
          <button id="manage-courses-button">Manage Course Resources</button>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    course: state.instructorReducer.selectedCourse,
  };
};

export default connect(mapStateToProps, {})(CourseDetails);
