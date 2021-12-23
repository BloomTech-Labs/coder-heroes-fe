import React from 'react';
import { Card } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';

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
  } = props.booking;
  const data = [
    { title: 'student name', text: child_name },
    { title: 'course', text: subject },
    { title: 'desciption', text: description },
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
      </Card>
    </div>
  );
};

export default ParentBookingCard;
