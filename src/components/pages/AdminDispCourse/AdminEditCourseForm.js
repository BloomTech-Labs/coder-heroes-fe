import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addClass } from '../../../redux/actions/adminActions';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import { Input, Form, Card, Checkbox, InputNumber, DatePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { RangePicker } = DatePicker;

let placeHolder = [];
let array_string = '';
let program_list = [];
let formPrerequisite = '';

const initialFormValues = {
  class_name: '',
  class_subject: '',
  class_desc: '',
};

//Config for date and time picker
const rangeConfig = {
  rules: [
    {
      type: 'array',
      message: 'Please select time!',
    },
  ],
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
    <div className="edit-course-disp">
      <div className="h1-container">
        <h1>Edit Course Details</h1>
      </div>
      <div className="edit-courses-form-container">
        <section className="form-items-container">
          <Form layout="vertical">
            <Form.Item
              label={<label style={{ color: '#096A70' }}>Course Name:</label>}
              style={{ width: '65%' }}
              className="input-label"
            >
              {/* <label style= {{ marginRight: '6.5%' }}></label> */}
              <Input
                onChange={handleChange}
                value={formValues.class_name}
                name="class_name"
              />
            </Form.Item>
            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Course Description:</label>
              }
              style={{ width: '75%', color: '#096A70' }}
              className="input-label"
            >
              <TextArea
                onChange={handleChange}
                type="text"
                style={{ height: 100, resize: 'none' }}
                value={formValues.class_desc}
                name="class_desc"
              />
            </Form.Item>

            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Days of the Week:</label>
              }
              name="disabled"
              valuePropName="checked"
              style={{ width: '100%' }}
            >
              {/* <label style = {{ marginRight: '1.5%'}}></label> */}
              <Checkbox className="day">Monday</Checkbox>
              <Checkbox className="day">Tuesday</Checkbox>
              <Checkbox className="day">Wednesday</Checkbox>
              <Checkbox className="day">Thursday</Checkbox>
              <Checkbox className="day">Friday</Checkbox>
              <Checkbox className="day">Saturday</Checkbox>
              <Checkbox className="day">Sunday</Checkbox>
            </Form.Item>

            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Maximum Capacity:</label>
              }
              style={{ width: '65%' }}
            >
              {/* <label style={{ marginRight: '.5%'}} ></label> */}
              <InputNumber />
            </Form.Item>
            <Form.Item
              style={{ width: '65%' }}
              label={<label style={{ color: '#096A70' }}>Minimum Age:</label>}
            >
              {/* <label style={{ marginRight: '6.75%' }}>Minimum Age: </label> */}
              <InputNumber />
              {/* <label style={{ marginLeft: '3%' }}>Maximum Age: </label> */}
            </Form.Item>
            <Form.Item
              style={{ width: '65%' }}
              label={<label style={{ color: '#096A70' }}>Maximum Age:</label>}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="range-time-picker"
              {...rangeConfig}
              label={<label style={{ color: '#096A70' }}>Date and Time:</label>}
              style={{ width: '100%' }}
            >
              {/* <label style={{ marginRight: '4%' }}>Date and Time: </label> */}
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#096A70' }}>Location:</label>}
              style={{ width: '65%' }}
            >
              {/* <label style={{ marginRight: '12%' }}></label> */}
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <Form.Item
              style={{ width: '80%' }}
              label={
                <label style={{ color: '#096A70' }}>Number of Sessions:</label>
              }
            >
              {/* <label style={{ marginRight: '1%'}}>
                Number of Sessions: 
              </label> */}
              <InputNumber />
            </Form.Item>
          </Form>
        </section>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>
            SAVE
          </button>
          <button
            className="cancel-button button-padding"
            onClick={handleSubmit}
          >
            CANCEL
          </button>
          {/* {props.errorMessage && <div>Error: {props.errorMessage}</div>} */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { addClass })(AdminAddCoursesForm);
