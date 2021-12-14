import React, { useState } from 'react';

const InstructorAddCourseCards = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Instructor Name:
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your course:
        <input
          type="text"
          name="course"
          value={inputs.course || ''}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default InstructorAddCourseCards;
