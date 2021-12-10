import React from 'react';
import { Card } from 'antd';

const ParentBookingCard = ({ booking }) => {
  const data = [
    { title: 'student name', text: booking.subject },
    { title: 'course desciption', text: booking.description },
    { title: 'first day of class', text: booking.start_date },
    { title: 'last day of class', text: booking.end_date },
    { title: 'time', text: `${booking.start_time} - ${booking.end_time}` },
    { title: 'location', text: booking.location },
    { title: 'instructor', text: booking.instructor_name },
    { title: 'instructor rating', text: booking.instructor_rating },
    { title: 'class size', text: booking.size },
  ];

  return (
    <div>
      <Card className="card" hoverable="true" title={booking.subject}>
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
        {/* <div className="buttonWrapper">
          <button>Continue Booking</button>{' '}
        </div> */}
      </Card>
    </div>
  );
};

export default ParentBookingCard;
