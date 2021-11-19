import React from 'react';
import { Card } from 'antd';

const ParentBookingCard = ({ sessions }) => {
  const { course, start_date, start_time, end_date, end_time } = sessions;

  return (
    <div>
      <Card className="card" hoverable="true" title={course}>
        <div className="card-container">
          <div className="left">
            <h2>Start Date & Time: </h2>

            <p>
              {start_date} {start_time}
            </p>
            <h2>End Date & Time: </h2>
            <p>
              {end_date} {end_time}
            </p>
          </div>
          <div className="right">
            <img
              className="image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            ></img>
          </div>
        </div>
        <div className="buttonWrapper">
          <button>Continue Booking</button>{' '}
        </div>
      </Card>
    </div>
  );
};

export default ParentBookingCard;
