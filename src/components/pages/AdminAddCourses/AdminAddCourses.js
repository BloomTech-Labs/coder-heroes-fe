import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../../redux/actions/adminActions';
import '../../../styles/index.less';
import { Input, Form, Card, Affix } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

let placeHolder = [];
let array_string = '';
let program_list = [];
let formPrerequisite = '';

const initialFormValues = {
  class_name: '',
  subject: '',
  description: '',
};

function AdminAddCoursesForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formPreReqs, setFormPreReqs] = useState({ prereq: '' });

  // waiting for backend to implement this and reducer / actions
  //
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

  function handleSubmit(e) {
    e.preventDefault();
    // waiting for backend to implement this and reducer / actions
    //
    // axios
    //   .post(`https://coder-heroes-api.herokuapp.com/course_types`, body, config)
    //   .then(resp => {
    //     console.log('axiosCall', resp);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    const merged = {
      ...formValues,
      prereq: placeHolder,
    };

    program_list.push(props.addClass(merged).payload);
    setFormValues(initialFormValues);
    clearPrereq();
  }

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
    if (formPreReqs.prereq.length !== 0) {
      formPrerequisite = formPreReqs.prereq;
      placeHolder.push(formPrerequisite);
      buildString(formPrerequisite);
    }
  };

  const clearPrereq = () => {
    setFormPreReqs({ prereq: [] });
    placeHolder = [];
    array_string = '';
    document.getElementById('prereq-render').innerHTML = array_string;
  };

  const buildString = item => {
    let arrayText = placeHolder.join(', ');
    document.getElementById('prereq-render').innerHTML = arrayText;
  };

  return (
    <div
      className="add-courses-form-container"
      style={{ border: '1px solid black', height: '75vh' }}
    >
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
            <div style={{ display: 'block' }} className="buttons_div">
              <button
                style={{ width: '50%', height: 25 }}
                className="prereq_add_button"
                onClick={addPrereq}
              >
                Add
              </button>
              <button
                style={{ width: '50%', height: 25 }}
                className="prereq_add_button"
                onClick={clearPrereq}
              >
                Clear
              </button>
            </div>
          </div>
          <Card
            style={{ width: '100%', marginBottom: '7.5%', maxHeight: '100%' }}
            bodyStyle={{ maxHeight: 100, overflow: 'auto' }}
          >
            <p id="prereq-render"></p>
          </Card>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="course-submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {/* {props.errorMessage && <div>Error: {props.errorMessage}</div>} */}
        </Form>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.program_list,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
