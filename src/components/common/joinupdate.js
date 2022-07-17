import React, { useState } from 'react';

const Form = props => {
  const [value, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    role: 'parent',
  });
  const onChange = event => {
    const name = event.target.name;
    setValues({ ...value, [name]: event.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Join Our Updates Now!</h1>
        <label>
          I am..
          <select name="role" onChange={onChange}>
            <option name="parent" value={props.values}>
              Parent
            </option>
            <option name="teacher" value={props.values}>
              Teacher
            </option>
          </select>
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="name"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
