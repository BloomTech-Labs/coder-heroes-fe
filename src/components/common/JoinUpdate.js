import React, { useState } from 'react';
import axios from 'axios';

// const headers_ = {
//   Authorization: 'BEARER keyFVhRW3Vr2Gtxha',
//   'Content-Type': 'application/json',
// };

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  role: 'Parent',
};

const Form = props => {
  const [value, setValues] = useState(initialForm);

  const onChange = event => {
    const name = event.target.name;
    setValues({ ...value, [name]: event.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://api.airtable.com/v0/appSgakw7GmVkbEVl/user%20info',
        {
          records: [
            {
              fields: {
                Name: 'John',
                firstName: 'John2',
                lastName: 'Brown',
                email: 'john@brown.com',
              },
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer keyFVhRW3Vr2Gtxha',
          },
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    setValues({ firstName: '', lastName: '', email: '', role: 'Parent' });
    e.target.reset();
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
            name="firstName"
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

// https://api.airtable.com/v0/appSgakw7GmVkbEVl/user%20info?api_key=keyFVhRW3Vr2Gtxha
