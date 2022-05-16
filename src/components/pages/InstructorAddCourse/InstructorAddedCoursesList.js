import React from 'react';
import InstructorProgram from './InstructorAddCourse';
import { connect } from 'react-redux';
import { List } from 'antd';

const InstructorProgramList = props => {
  const { newCourses } = props;

  return (
    <div>
      <h1 className="instructor-h1">Already Submitted Programs:</h1>
      <List className="instructor-list">
        {newCourses &&
          newCourses.map(course => {
            return <InstructorProgram key={course.course_id} course={course} />;
          })}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return { newCourses: state.coursesReducer.newCourses };
};

export default connect(mapStateToProps, {})(InstructorProgramList);
