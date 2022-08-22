import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dummyData } from '../../../dummyData';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import { Input, Form, Checkbox, InputNumber, DatePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { RangePicker } = DatePicker;

const courseData = dummyData.courses;

const initialFormValues = {
  course_name: courseData[0].course_name,
  course_desc: courseData[0].course_description,
  course_days: courseData[0].days_of_week,
  course_capacity: courseData[0].max_size,
  course_max_age: courseData[0].max_age,
  course_min_age: courseData[0].min_age,
  course_start_date: courseData[0].start_date,
  course_end_date: courseData[0].end_date,
  course_start_time: courseData[0].start_time,
  course_end_time: courseData[0].end_time,
  course_location: courseData[0].location,
  course_num_sessions: courseData[0].number_of_sessions,
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

function AdminEditCoursesForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleCancel = e => {
    history.push('/admin-course-details');
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const checkDays = dayTBC => {
    let exists = formValues.course_days.filter(day => day === dayTBC);
    if (exists.length === 1) {
      return true;
    } else {
      return false;
    }
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
              <Input
                onChange={handleChange}
                value={formValues.course_name}
                name="course_name"
              />
            </Form.Item>
            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Course Description:</label>
              }
              style={{ width: '75%', color: '#096A70' }}
              className="input-label"
              onChange={handleChange}
              type="text"
            >
              <TextArea
                value={formValues.course_desc}
                name="course_desc"
                style={{ height: 100 }}
              />
            </Form.Item>

            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Days of the Week:</label>
              }
              valuePropName="checked"
              style={{ width: '100%' }}
            >
              <Checkbox className="day" defaultChecked={checkDays('Monday')}>
                Monday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Tuesday')}>
                Tuesday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Wednesday')}>
                Wednesday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Thursday')}>
                Thursday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Friday')}>
                Friday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Saturday')}>
                Saturday
              </Checkbox>
              <Checkbox className="day" defaultChecked={checkDays('Sunday')}>
                Sunday
              </Checkbox>
            </Form.Item>

            <Form.Item
              label={
                <label style={{ color: '#096A70' }}>Maximum Capacity:</label>
              }
              style={{ width: '65%' }}
            >
              <InputNumber
                value={formValues.course_capacity}
                name="course_capacity"
              />
            </Form.Item>
            <Form.Item
              style={{ width: '65%' }}
              label={<label style={{ color: '#096A70' }}>Minimum Age:</label>}
            >
              <InputNumber
                value={formValues.course_min_age}
                name="course_min_age"
              />
            </Form.Item>
            <Form.Item
              style={{ width: '65%' }}
              label={<label style={{ color: '#096A70' }}>Maximum Age:</label>}
            >
              <InputNumber
                value={formValues.course_max_age}
                name="course_max_age"
              />
            </Form.Item>
            <Form.Item
              {...rangeConfig}
              label={<label style={{ color: '#096A70' }}>Date and Time:</label>}
              style={{ width: '100%' }}
            >
              <RangePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                name="course_date_time"
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#096A70' }}>Location:</label>}
              style={{ width: '65%' }}
              onChange={handleChange}
            >
              <Input
                value={formValues.course_location}
                name="course_location"
              />
            </Form.Item>
            <Form.Item
              style={{ width: '80%' }}
              label={
                <label style={{ color: '#096A70' }}>Number of Sessions:</label>
              }
            >
              <InputNumber
                value={formValues.course_num_sessions}
                name="course_num_sessions"
              />
            </Form.Item>
          </Form>
        </section>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>
            SAVE
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            CANCEL
          </button>
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

export default connect(mapStateToProps)(AdminEditCoursesForm);
