import React from 'react';
import { Table } from 'antd';
import '../../../styles/ParentStyles/index.less';

const { Column } = Table;

const data = [
  {
    key: '1',
    course_name: 'HTML',
    instructor_name: 'Ms. Johnson',
    course_day: 'Monday',
    course_time: '3:00 PM - 4:00 PM',
  },
  {
    key: '2',
    course_name: 'CSS',
    instructor_name: 'Mr. Green',
    course_day: 'Friday',
    course_time: '11:00 AM - 12:00 PM',
  },
  {
    key: '3',
    course_name: 'JavaScript',
    instructor_name: 'Ms. Smith',
    course_day: 'Wednesday & Friday',
    course_time: '2:00 PM - 3:00 PM (WED), 10:00 AM - 11:00 AM (FRI)',
  },
];

const CurrentCoursesDetails = props => {
  return (
    <div className="current-courses-details-container">
      <div
        className="current-courses-details-exit"
        onClick={() => props.setModal(false)}
      >
        X
      </div>
      <Table className="current-courses-details-modal" dataSource={data}>
        <Column title="Course Name" dataIndex="course_name" key="course_name" />
        <Column
          title="Instructor Name"
          dataIndex="instructor_name"
          key="instructor_name"
        />
        <Column title="Course Day" dataIndex="course_day" key="course_day" />
        <Column title="Course Time" dataIndex="course_time" key="course_time" />
      </Table>
    </div>
  );
};

export default CurrentCoursesDetails;
