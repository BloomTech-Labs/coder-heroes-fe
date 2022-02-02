import React from 'react';
import { Card } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import { Button } from '../../common';
import axios from 'axios';

const ParentBookingCard = props => {
  // child_name, child_id, course_id, description, end_date, end_time, instructor_id, instructor_name, location, prereqs, schedule_id, size, start_date ,start_time, subject
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

  const token = localStorage.getItem('okta-token-storage');
  const parsedToken = JSON.parse(token);

  const handleClick = e => {
    axios
      .post(
        `http://localhost:8080/children/1/enrollments`,
        { child_id: 1, class_id: course_id, completed: true },
        {
          headers: {
            Authorization: 'Bearer ' + parsedToken.idToken.value,
          },
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

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
        <Button buttonText="ADD" handleClick={handleClick}></Button>
      </Card>
    </div>
  );
};

export default ParentBookingCard;
