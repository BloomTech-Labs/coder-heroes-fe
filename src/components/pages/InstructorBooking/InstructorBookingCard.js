import React, { useState } from 'react';
import { Card } from 'antd';
import '../../../styles/index.less';

const InstructorBookingCard = ({ course, text, setCurrentModalProps }) => {
  const { start_date, end_date, start_time, end_time, size, subject } = course;
  // const [collapsed, setCollapsed] = useState(true);
  console.log('card course state', course, setCurrentModalProps);

  // if (collapsed === false) {
  //   return (
  //     <>
  //       <InstructorBookingCardModal course={course} text={text} />
  //     </>
  //   );
  // }

  return (
    <div>
      <Card title={<h1>{subject}</h1>}>
        <div>
          {start_date}
          {start_time}
          <button onClick={setCurrentModalProps(course)}>Details</button>
          {/* <button onClick={() => setCollapsed(!collapsed)}>Details</button> */}
        </div>
      </Card>
    </div>
  );
};

export default InstructorBookingCard;
