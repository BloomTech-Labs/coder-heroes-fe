import React from 'react';
import { Card } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import { Button } from '../../common';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const ParentBookingCard = props => {
  const {
    child_name,
    subject,
    description,
    start_date,
    end_date,
    start_time,
    end_time,
    location,
    instructor_name,
    size,
    course_id,
  } = props.booking;

  const handleClick = e => {
    axiosWithAuth()
      .post(
        '/children/1/enrollments', // TODO: Hook this request up to pass the ID of the parent/child involved once we have this data in state.
        { child_id: 1, class_id: course_id, completed: true }
      )
      .then(res => console.log(res)) // TODO: Let's perform some action with this result.
      .catch(err => console.log(`message: ${err.message}`));
  };

  const data = [
    { title: 'student name', text: child_name },
    { title: 'course', text: subject },
    { title: 'description', text: description },
    { title: 'first day of class', text: dateConverter(start_date) },
    { title: 'last day of class', text: dateConverter(end_date) },
    {
      title: 'time',
      text: `${timeConverter(start_time)} - ${timeConverter(end_time)}`,
    },
    { title: 'location', text: location },
    { title: 'instructor', text: instructor_name },
    { title: 'class size', text: size },
  ];

  return (
    <div>
      <Card className="card" hoverable="true" title={subject}>
        <div className="card-container">
          <div className="left">
            {data.map((itm, idx) => {
              return (
                <div key={idx}>
                  {itm.title}: {itm.text}
                </div>
              );
            })}
          </div>
          <div className="right">
            <img
              className="image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="booking card"
            />
          </div>
        </div>
        <Button buttonText="ADD" handleClick={handleClick}></Button>
      </Card>
    </div>
  );
};

export default ParentBookingCard;
