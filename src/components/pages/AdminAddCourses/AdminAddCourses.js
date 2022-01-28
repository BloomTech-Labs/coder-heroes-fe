import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/index.less';
import { Input, Form } from 'antd';

export default function AdminAddCoursesForm(props) {
  const [formValues, setFormValues] = useState({
    subject: '',
    description: '',
    prereq: '',
  });
  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };
  const body = {
    ...formValues,
    subject: formValues.subject,
    description: formValues.description,
    prereq: formValues.prereq,
  };
  function handleSubmit(e) {
    axios
      .post(`https://coder-heroes-api.herokuapp.com/course-types`, body, config)
      .then(resp => {
        console.log('axiosCall', resp);
      })
      .catch(err => {
        console.error(err);
      });
    e.preventDefault();
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ marginTop: 30, fontSize: 20 }}>
          You can submit new course below!
        </h1>
      </div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          wrapperCol={{ span: 50 }}
          layout="horizontal"
          onChange={handleChange}
        >
          <Form.Item>
            <label htmlFor="other">Subject: </label>
            <Input value={formValues.subject} name="subject" />
          </Form.Item>
          <Form.Item>
            <label htmlFor="description">Description: </label>
            <Input value={formValues.description} name="description" />
          </Form.Item>
          <Form.Item>
            <label htmlFor="prereq">Prerequisite: </label>
            <Input value={formValues.prereq} name="prereq" />
          </Form.Item>

          {props.errorMessage && <div>Error: {props.errorMessage}</div>}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleSubmit}>Submit!</button>
          </div>
        </Form>
      </section>
    </div>
  );
}
