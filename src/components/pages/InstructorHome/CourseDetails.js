import React from 'react';

const CourseDetails = props => {
  const { course } = props;
  return (
    <div>
      <h3>{course.subject}</h3>
      <h2>{course.start_date}</h2>
    </div>
  );
};

export default CourseDetails;
