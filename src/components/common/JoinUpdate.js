import React, { useState } from 'react';
import axios from 'axios';

const initialForm = {
  'First Name': '',
  'Last Name': '',
  'Email Address': '',
  Role: 'Parent',
  Notes: '',
};

const Form = props => {
  const [value, setValues] = useState(initialForm);

  const onChange = event => {
    const name = event.target.name;
    setValues({ ...value, [name]: event.target.value });
    console.log(event.target.name);
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
                'Email Address': `${value['Email Address']}`,
                'First Name': `${value['First Name']}`,
                'Last Name': `${value['Last Name']}`,
                Role: `${value['Role']}`,
                Notes: `${value['Notes']}`,
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
        console.log(res.data.records[0].fields);
      })
      .catch(err => {
        console.log(err);
      });
    setValues({
      'First Name': '',
      'Last Name': '',
      'Email Address': '',
      Role: 'Parent',
      Notes: '',
    });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Join Our Updates Now!</h1>
        <label>
          I am..
          <select name="Role" onChange={onChange}>
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
            name="First Name"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="Last Name"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="Email Address"
            value={props.values}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Notes:
          <input
            type="text"
            name="Notes"
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
