import React from 'react';

const SelectedCourseDetails = ({ selectedOption }) => {
  return (
    <div>
      <p>Course Details:</p>
      <p>Instructor: {selectedOption.instructor_name}</p>
      <p>Size: {selectedOption.size}</p>
      <p>Subject: {selectedOption.subject}</p>
      <p>Description: {selectedOption.description}</p>
      <p>Start Date: {selectedOption.start_date}</p>
      <p>End Date : {selectedOption.end_date}</p>
      <p>Start Time: {selectedOption.start_time}</p>
      <p>End Time: {selectedOption.end_time}</p>
      <p>Price: {selectedOption.price}</p>
    </div>
  );
};

export default SelectedCourseDetails;
