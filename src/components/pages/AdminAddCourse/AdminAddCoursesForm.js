import React, { useState } from 'react';
import { connect } from 'react-redux';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import {
  Input,
  Form,
  Checkbox,
  InputNumber,
  DatePicker,
  Modal,
  TimePicker,
} from 'antd';
import { Moment } from 'moment';
import TextArea from 'antd/lib/input/TextArea';
const { RangePicker } = DatePicker;

const initialFormValues = {
  course_id: '',
  course_name: '',
  course_desc: '',
  course_days: [],
  course_capacity: '',
  course_max_age: '',
  course_min_age: '',
  course_start_date: '',
  course_end_date: '',
  course_start_time: '',
  course_end_time: '',
  course_location: '',
  course_num_sessions: '',
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

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
  const { handleOk, handleCancel, isModalVisible } = props;

  const handleSubmit = e => {
    e.preventDefault();
    handleOk(formValues);
    setFormValues(initialFormValues);
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = e => {
    if (e.target.checked) {
      setFormValues({
        ...formValues,
        course_days: [...formValues.course_days, e.target.value],
      });
    }
  };

  const handleDateChange = value => {
    setFormValues({
      ...formValues,
      course_start_date: value[0].format('MM/DD/YYYY'),
      course_end_date: value[1].format('MM/DD/YYYY'),
    });
  };

  const handleTimeChange = value => {
    setFormValues({
      ...formValues,
      course_start_time: value[0].format('hh:mm:ss'),
      course_end_time: value[1].format('hh:mm:ss'),
    });
  };

  return (
    <div className="edit-course-disp">
      <div className="edit-courses-form-container">
        <section className="form-items-container">
          <Modal
            visible={isModalVisible}
            title="Admin Add Class Form"
            okText={!formValues.course_id ? 'Add Course' : 'Update Course'}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
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
                  <label style={{ color: '#096A70' }}>
                    Course Description:
                  </label>
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
                onChange={handleCheck}
              >
                <Checkbox.Group options={daysOfWeek} />
              </Form.Item>

              <Form.Item
                label={
                  <label style={{ color: '#096A70' }}>Maximum Capacity:</label>
                }
                style={{ width: '65%' }}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_capacity}
                  name="course_capacity"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%' }}
                label={<label style={{ color: '#096A70' }}>Minimum Age:</label>}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_min_age}
                  name="course_min_age"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%' }}
                label={<label style={{ color: '#096A70' }}>Maximum Age:</label>}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_max_age}
                  name="course_max_age"
                />
              </Form.Item>
              <Form.Item
                {...rangeConfig}
                label={
                  <label style={{ color: '#096A70' }}>Date and Time:</label>
                }
                style={{ width: '100%' }}
              >
                <RangePicker
                  onChange={value => handleDateChange(value)}
                  format="YYYY-MM-DD"
                  name="course_date"
                />
              </Form.Item>
              <Form.Item
                {...rangeConfig}
                label={
                  <label style={{ color: '#096A70' }}>Date and Time:</label>
                }
                style={{ width: '100%' }}
              >
                <TimePicker.RangePicker
                  onChange={handleTimeChange}
                  use12Hours={true}
                  format="HH:mm"
                  name="course_time"
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
                  <label style={{ color: '#096A70' }}>
                    Number of Sessions:
                  </label>
                }
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_num_sessions}
                  name="course_num_sessions"
                />
              </Form.Item>
            </Form>
          </Modal>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps)(AdminAddCoursesForm);
