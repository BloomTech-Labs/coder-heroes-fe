import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { connect } from 'react-redux';
import '../../../styles/InstructorStyles/index.less';

function InstructorCourseManagement(props) {
  const { instructor } = props;

  return (
    <div>
      <Card className="instructor-management-card" title={'Course Management'}>
        <p>Select a course on the calendar</p>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps)(InstructorCourseManagement);
