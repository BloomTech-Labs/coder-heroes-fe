import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addClass } from '../../../redux/actions/adminActions';
import '../../../styles/AdminAddProgramStyles/AdminAddProgramsStyles.less';
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
    <div className="add-courses-form-container">
      <div className="h1-container">
        <h1>Submit New Program:</h1>
      </div>
      <section className="form-items-container">
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
              value={formValues.class_subject}
              name="class_subject"
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="description">Description:</label>
            <TextArea
              onChange={handleChange}
              type="text"
              style={{ height: 100, resize: 'none' }}
              value={formValues.class_desc}
              name="class_desc"
            />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            name="prereq-split-container"
          >
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq" className="prereq">
                Prerequisites:
              </label>
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

          <div className="submit-button-container">
            <button className="submit-button" onClick={handleSubmit}>
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
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
