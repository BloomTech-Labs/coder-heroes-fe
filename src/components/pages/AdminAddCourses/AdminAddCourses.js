import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from './actions';
import '../../../styles/index.less';
import { Input, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const initialFormValues = {
  class_name: '',
  subject: '',
  description: '',
  prereq: '',
};

function AdminAddCoursesForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formPreReqs, setFormPreReqs] = useState({ prereqs: [] });
  let placeHolder = [];

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  // const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  // const config = {
  //   headers: { Authorization: `Bearer ${token.idToken.value}` },
  // };
  // const body = {
  //   ...formValues,
  //   subject: formValues.subject,
  //   description: formValues.description,
  //   prereq: formValues.prereq,
  // };

  const handleSubmit = e => {
    // waiting for backend to implement this
    // axios
    //   .post(`https://coder-heroes-api.herokuapp.com/course_types`, body, config)
    //   .then(resp => {
    //     console.log('axiosCall', resp);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    e.preventDefault();

    // PROBLEM IS HERE
    // setFormValues({
    //   ...formValues,
    //   class_name: formValues.class_name,
    //   subject: formValues.subject,
    //   description: 'random description',
    //   prereq: [12312,23423,234234,234234]
    // });

    setFormValues({
      ...formValues,
      prereq: placeHolder,
    });

    setFormPreReqs(initialFormValues);
    setFormPreReqs([]);
    placeHolder = [];
  };

  const handleChange = e => {
    if (e.target.name !== 'prereq') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === 'prereq') {
      setFormPreReqs({
        ...formPreReqs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addPrereq = e => {
    placeHolder.push(formPreReqs);
  };

  return (
    <div className="add-courses-form-container">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ marginTop: 30, fontSize: 20 }}>Submit New Program:</h1>
      </div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <Form wrapperCol={{ span: 50 }} layout="horizontal">
          <Form.Item>
            <label htmlFor="className">Class Name: </label>
            <Input
              onChange={handleChange}
              value={formValues.class_name}
              name="class_name"
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="other">Subject: </label>
            <Input
              onChange={handleChange}
              value={formValues.subject}
              name="subject"
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="description">Description: </label>
            <TextArea
              onChange={handleChange}
              type="text"
              style={{ height: 100, resize: 'none' }}
              value={formValues.description}
              name="description"
            />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            className="prereq-split-container"
          >
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq">Prerequisites: </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <button
              style={{ width: '30%', height: 25 }}
              className="prereq_add_button"
              onClick={addPrereq}
            >
              Add
            </button>
          </div>
          {props.errorMessage && <div>Error: {props.errorMessage}</div>}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="course-submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
