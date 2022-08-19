import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addClass } from '../../../redux/actions/adminActions';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import { Input, Form, Card } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

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

  function handleSubmit(e) {
    e.preventDefault();

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

  return (
    <>
      <div className="h1-container">
        <h1>Edit Course:</h1>
      </div>
      <div className="edit-courses-form-container">
        <section className="form-items-container">
          <Form wrapperCol={{ span: 50 }} layout="horizontal">
            <Form.Item>
              <label htmlFor="className">Course Name: </label>
              <Input
                onChange={handleChange}
                value={formValues.class_name}
                name="class_name"
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="description">Course Description:</label>
              <TextArea
                onChange={handleChange}
                type="text"
                style={{ height: 100, resize: 'none' }}
                value={formValues.class_desc}
                name="class_desc"
              />
            </Form.Item>

            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Days of the Week:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Maximum Capacity:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Age Range:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Time:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Date:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Location:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>

            <Form.Item style={{ width: '80%' }}>
              <label htmlFor="prereq" className="prereq">
                Number of Sessions:
              </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>

            <div className="submit-button-container">
              <button className="submit-button" onClick={handleSubmit}>
                SAVE
              </button>
              <button
                className="cancel-button button-padding"
                onClick={handleSubmit}
              >
                CANCEL
              </button>
            </div>
            {/* {props.errorMessage && <div>Error: {props.errorMessage}</div>} */}
          </Form>
        </section>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
