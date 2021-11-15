import React from 'react';
import { Card } from 'antd';
import '../../../styles/index.less';

const InstructorBookingCardModal = props => {
  const { currentModalProps, text } = props;
  const {
    start_date,
    end_date,
    start_time,
    end_time,
    size,
    subject,
  } = currentModalProps;
  return (
    <Card>
      <h1>{subject}</h1>
      <p>
        {text.when}
        {start_time}
      </p>
      <p>
        {text.seize}
        {size}
      </p>
      <p>
        {text.description}
        {subject}
      </p>
      <button>Book Course</button>
    </Card>
  );
};
export default InstructorBookingCardModal;
