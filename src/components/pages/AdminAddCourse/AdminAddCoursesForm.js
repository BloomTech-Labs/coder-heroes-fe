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
  Select,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;

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
  const { handleOk, handleCancel, isModalVisible, initialFormValues } = props;
  const [formValues, setFormValues] = useState(initialFormValues);

  const numberFields = [
    {
      text: 'Maximum Capacity',
      name: 'course_capacity',
      value: formValues.course_capacity,
    },
    {
      text: 'Maximum Age',
      name: 'course_max_age',
      value: formValues.course_max_age,
    },
    {
      text: 'Minimum Age',
      name: 'course_min_age',
      value: formValues.course_min_age,
    },
  ];

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
    if (!e.target.checked) {
      setFormValues({
        ...formValues,
        course_days: formValues.course_days.filter(
          value => value !== e.target.value
        ),
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

  const handleProgramSelect = value => {
    setFormValues({
      ...formValues,
      program_id: value,
    });
  };

  return (
    <div className="edit-course-disp">
      <div className="edit-courses-form-container">
        <section className="form-items-container">
          <Modal
            visible={isModalVisible}
            title={!formValues.course_id ? 'Add Course' : 'Edit Course'}
            okText="Save"
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Course Name:
                  </label>
                }
                style={{
                  width: '65%',
                  fontSize: '1.1rem',
                }}
                className="input-label"
              >
                <Input
                  onChange={handleChange}
                  value={formValues.course_name}
                  name="course_name"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Course Description:
                  </label>
                }
                style={{ width: '75%', color: '#096A70', fontSize: '1.1rem' }}
                className="input-label"
                type="text"
                onChange={handleChange}
              >
                <TextArea
                  value={formValues.course_desc}
                  name="course_description"
                  style={{ height: 100, fontSize: '1.1rem' }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Program:
                  </label>
                }
                style={{ width: '75%', color: '#096A70', fontSize: '1.1rem' }}
              >
                <Select onChange={handleProgramSelect}>
                  <Option value="">--Choose a Program--</Option>
                  <Option value={1}>Codercamp</Option>
                  <Option value={2}>Codersitters</Option>
                  <Option value={3}>Coderyoga</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Instructor ID:
                  </label>
                }
                style={{ width: '65%', fontSize: '1.1rem' }}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.instructor_id}
                  name="instructor_id"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Days of the Week:
                  </label>
                }
                valuePropName="checked"
                style={{ width: '100%', fontSize: '1.1rem' }}
                onChange={handleCheck}
              >
                <Checkbox.Group options={daysOfWeek} />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Start and End Time:
                  </label>
                }
                style={{ width: '60%', fontSize: '1.1rem' }}
              >
                {formValues.course_days.map(day => (
                  <label key={`${day}`}>
                    {`${day}:`}
                    <TimePicker.RangePicker
                      onChange={handleTimeChange}
                      use12Hours={true}
                      format="HH:mm"
                      name="course_time"
                    />
                  </label>
                ))}
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Location:
                  </label>
                }
                style={{ width: '65%', fontSize: '1.1rem' }}
                onChange={handleChange}
              >
                <Input
                  value={formValues.course_location}
                  name="course_location"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              {numberFields.map(field => (
                <Form.Item
                  label={
                    <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                      {`${field.text}:`}
                    </label>
                  }
                  style={{ width: '65%', fontSize: '1.1rem' }}
                  onChange={handleChange}
                >
                  <InputNumber
                    value={field.value}
                    name={`${field.name}`}
                    style={{ fontSize: '1.1rem' }}
                  />
                </Form.Item>
              ))}
              <Form.Item
                {...rangeConfig}
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Start and End Date:
                  </label>
                }
                style={{ width: '100%', fontSize: '1.1rem' }}
              >
                <DatePicker.RangePicker
                  onChange={handleDateChange}
                  format="YYYY-MM-DD"
                  name="course_date"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '80%', fontSize: '1.1rem' }}
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Number of Sessions:
                  </label>
                }
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_num_sessions}
                  name="course_num_sessions"
                  style={{ fontSize: '1.1rem' }}
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
