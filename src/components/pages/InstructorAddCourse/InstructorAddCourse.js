import React from 'react';
import { List } from 'antd';

const InstructorProgram = props => {
  const { course } = props;

  return (
    <div>
      <List bordered>
        <List.Item>
          <p>
            <b>Course: {course.course_name}</b>
          </p>
          {'\n'}
          <p>Date: {course.start_date}</p>
          <p>Time: {course.start_time}</p>
        </List.Item>
      </List>
    </div>
  );
};

export default InstructorProgram;
