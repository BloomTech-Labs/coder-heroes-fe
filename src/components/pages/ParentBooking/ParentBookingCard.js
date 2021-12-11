import React from 'react';
import { Card } from 'antd';

const ParentBookingCard = props => {
  const {
    subject,
    description,
    start_date,
    end_date,
    start_time,
    end_time,
    location,
    instructor_name,
    instructor_rating,
    size,
  } = props.booking;
  const data = [
    { title: 'student name', text: subject },
    { title: 'course desciption', text: description },
    { title: 'first day of class', text: start_date },
    { title: 'last day of class', text: end_date },
    { title: 'time', text: `${start_time} - ${end_time}` },
    { title: 'location', text: location },
    { title: 'instructor', text: instructor_name },
    { title: 'instructor rating', text: instructor_rating },
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
