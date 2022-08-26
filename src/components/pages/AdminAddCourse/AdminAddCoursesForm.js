import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';
import { addClass } from '../../../redux/actions/adminActions';

// Styles
import '../../../styles/AdminAddCoursesStyles/AdminAddCoursesStyles.less';
import { Input, InputNumber, Form, Button, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useHistory } from 'react-router-dom';

let placeHolder = [];
let array_string = '';
let program_list = [];
let formPrerequisite = '';

const initialFormValues = {
  class_name: '',
  class_subject: '',
  class_desc: '',
};

function AdminAddCoursesForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formPreReqs, setFormPreReqs] = useState({ prereq: '' });
  const { authState, oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
  }, []);

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth(authState.idToken.idToken)
      .post('/courses', formValues)
      .then(() => {
        history.push('/admin-courses');
      })
      .catch(err => {
        console.error(err);
      });
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

  const addPrereq = () => {
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

  const buildString = () => {
    let arrayText = placeHolder.join(', ');
    document.getElementById('prereq-render').innerHTML = arrayText;
  };

  const onReset = () => {
    setFormValues(initialFormValues);
  };

  return (
    <div className="add-courses-form-container">
      <div className="h1-container">
        <h1>Add Course</h1>
      </div>
      <section className="form-items-container">
        <Form onFinish={handleSubmit} layout="horizontal">
          <Form.Item label="Course Name:">
            <Input
              onChange={handleChange}
              value={formValues.class_name}
              name="class_name"
            />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea
              onChange={handleChange}
              type="text"
              style={{ height: 100, resize: 'none' }}
              value={formValues.class_desc}
              name="class_desc"
            />
          </Form.Item>
          <Form.Item label="Days">
            <Checkbox>Sunday</Checkbox>
            <Checkbox>Monday</Checkbox>
            <Checkbox>Tuesday</Checkbox>
            <Checkbox>Wednesday</Checkbox>
            <Checkbox>Thursday</Checkbox>
            <Checkbox>Friday</Checkbox>
            <Checkbox>Saturday</Checkbox>
          </Form.Item>
          <Form.Item label="Times:">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </Form.Item>
          <Form.Item label="Maximum Capacity:">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Minimum Age:">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Maximum Age:">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Instructor:">
            <Input />
          </Form.Item>
          <Form.Item label="Start and End Dates:">
            <Input />
          </Form.Item>
          <Form.Item label="Location:">
            <Input />
          </Form.Item>
          <Form.Item label="Number of Sessions">
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="small">
              Save
            </Button>
            <Button onClick={onReset} size="small">
              Cancel
            </Button>
          </Form.Item>

          {/* {props.errorMessage && <div>Error: {props.errorMessage}</div>} */}
        </Form>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
