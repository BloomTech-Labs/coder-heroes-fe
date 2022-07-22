import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col, Typography } from 'antd';
// import '../../../styles/LandingPageStyles/joinUpdate.less';

const { Title } = Typography;
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
    <div className="update-form" style={{ backgroundColor: '#f2ce60' }}>
      <Row justify="space-evenly">
        <Col
          span={12}
          className="join_title"
          style={{ backgroundColor: '#f2ce60', float: 'center' }}
        >
          <Title
            className="title"
            style={{
              backgroundColor: '#f2ce60',
              color: '#Ec2c4E',
              textAlign: 'center',
              padding: '7%',
              marginLeft: '5%',
            }}
          >
            <h2>Join Our Updates Today!</h2>
          </Title>
        </Col>

        <Col
          span={12}
          className="join-form"
          style={{
            display: 'inline-block',
            backgroundColor: '#f2ce60',
            textAlign: 'right',
            padding: '2%',
            fontFamily: 'inherit',
          }}
        >
          <form onSubmit={onSubmit}>
            <label>
              I am a...
              <select name="Role" onChange={onChange}>
                <option name="parent" value={props.values}>
                  Parent
                </option>
                <option name="instructor" value={props.values}>
                  Instructor
                </option>
              </select>
            </label>
            <div>
              <label>
                First Name:
                <input
                  style={{ border: '1px solid black' }}
                  type="text"
                  placeholder="Enter First Name..."
                  name="First Name"
                  value={props.values}
                  onChange={onChange}
                />
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input
                  style={{ border: '1px solid black' }}
                  type="text"
                  placeholder="Enter Last Name..."
                  name="Last Name"
                  value={props.values}
                  onChange={onChange}
                />
              </label>
            </div>
            <div>
              <label>
                Email Address:
                <input
                  style={{ border: '1px solid black' }}
                  type="email"
                  placeholder="Enter Email..."
                  name="Email Address"
                  value={props.values}
                  onChange={onChange}
                />
              </label>
            </div>

            <label>
              Notes:
              <input
                style={{ border: '1px solid black' }}
                type="text"
                placeholder="Add a Message..."
                name="Notes"
                value={props.values}
                onChange={onChange}
              />
            </label>
            <div
              style={{ float: 'right', width: '76%', 'text-align': 'right' }}
            >
              <input type="submit" value="Join Now!" />
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
//johns api call https://api.airtable.com/v0/app4rHdRcowslAwKp/Table%201 keyvivxw89Lg0dwjm
// our api call https://api.airtable.com/v0/appSgakw7GmVkbEVl/user%20info keyFVhRW3Vr2Gtxha
