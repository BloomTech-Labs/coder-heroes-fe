import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { authState } from "@okta/okta-react";
// import { authState, OktaAuth } from "@okta/okta-auth-js";

// console.log(localStorage.getItem("token"));
const initialForm = {
  'First Name': '',
  'Last Name': '',
  'Email Address': '',
  Role: 'Parent',
  Notes: '',
};
const Form = props => {
  // const  { OktaAuth }  = useOktaAuth();
  const [value, setValues] = useState(initialForm);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // console.log(authState);

  // useEffect(() => {
  //     console.log(authState);
  //   // if( authState !==  null && authState.isAuthenticated){
  //   //   setIsLoggedIn(false);
  //   // } else {
  //   //   setIsLoggedIn(true);
  //   // }
  // },[]);
  const onChange = event => {
    const name = event.target.name;
    setValues({ ...value, [name]: event.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://api.airtable.com/v0/app4rHdRcowslAwKp/Table%201',
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
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
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
      {!isLoggedIn ? (
        <>
          <h2>Join Our Updates Now!</h2>{' '}
          <form onSubmit={onSubmit}>
            <fieldset>
              <label
                style={{
                  display: 'inline-block',
                  float: 'left',
                  width: '80%',
                  'text-align': 'right',
                }}
              >
                I am..
                <select name="Role" onChange={onChange}>
                  <option name="parent" value={props.values}>
                    Parent
                  </option>
                  <option name="instructor" value={props.values}>
                    Instructor
                  </option>
                </select>
              </label>

              <label
                style={{
                  display: 'inline-block',
                  float: 'left',
                  width: '80%',
                  'text-align': 'right',
                }}
              >
                First Name:
                <input
                  style={{ border: '1px solid black' }}
                  type="text"
                  placeholder="Enter First Name.."
                  name="First Name"
                  value={props.values}
                  onChange={onChange}
                />
              </label>

              <label
                style={{
                  display: 'inline-block',
                  float: 'left',
                  width: '80%',
                  'text-align': 'right',
                }}
              >
                Last Name:
                <input
                  style={{ border: '1px solid black' }}
                  type="text"
                  placeholder="Enter Last Name.."
                  name="Last Name"
                  value={props.values}
                  onChange={onChange}
                />
              </label>

              <label
                style={{ float: 'left', width: '80%', 'text-align': 'right' }}
              >
                Email Address:
                <input
                  style={{ border: '1px solid black' }}
                  type="email"
                  placeholder="Enter Email.."
                  name="Email Address"
                  value={props.values}
                  onChange={onChange}
                />
              </label>

              <label
                style={{ float: 'left', width: '80%', 'text-align': 'right' }}
              >
                Notes:
                <input
                  style={{ border: '1px solid black' }}
                  type="text"
                  placeholder="Add a Message.."
                  name="Notes"
                  value={props.values}
                  onChange={onChange}
                />
              </label>

              <div
                style={{ float: 'left', width: '76%', 'text-align': 'right' }}
              >
                <input type="submit" value="Join Now!" />
              </div>
            </fieldset>
          </form>
        </>
      ) : null}
    </div>
  );
};
export default Form;

//johns api call https://api.airtable.com/v0/app4rHdRcowslAwKp/Table%201 keyvivxw89Lg0dwjm
// our api call https://api.airtable.com/v0/appSgakw7GmVkbEVl/user%20info keyFVhRW3Vr2Gtxha
