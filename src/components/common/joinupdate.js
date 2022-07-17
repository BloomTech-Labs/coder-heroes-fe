import React, { useState } from 'react';
const Form = props => {
  const onChange = event => {
    console.log(event.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Join Our Updates Now!</h1>
      <label>
        {' '}
        I am..
        <select name="role">
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
      <br />
      <label>
        First Name:
        <input
          type="text"
          name="name"
          // value={values}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          // value={lastName}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          // value={email}
          onChange={onChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
export default Form;
