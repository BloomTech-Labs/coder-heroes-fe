import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import {
  Input,
  Form,
  Checkbox,
  InputNumber,
  DatePicker,
  Button,
  Modal,
  TimePicker,
  Select,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;

const initialFormValues = {
  course_id: '',
  course_name: '',
  course_description: '',
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
  instructor_id: '',
  program_name: '',
  instructor_name: '',
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
  const { handleOk, courseinfo } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setFormValues({
      course_id: '',
      course_name: courseinfo.course_name,
      course_description: courseinfo.course_description,
      course_days: courseinfo.days_of_week,
      course_capacity: courseinfo.max_size,
      course_max_age: courseinfo.max_age,
      course_min_age: courseinfo.min_age,
      course_start_date: courseinfo.start_date.substr(0, 10),
      course_end_date: courseinfo.end_date.substr(0, 10),
      course_start_time: courseinfo.start_time.substr(0, 5),
      course_end_time: courseinfo.end_time.substr(0, 5),
      course_location: '',
      course_num_sessions: courseinfo.number_of_sessions,
      instructor_id: '',
      program_name: courseinfo.program_name,
      instructor_name: courseinfo.instructor_name,
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

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
          <Button type="primary" onClick={showModal}>
            {props.button_name}
          </Button>
          <Modal
            visible={isModalVisible}
            title={!formValues.course_id ? 'Add Course' : 'Edit Course'}
            okText="Save"
            onOk={handleSubmit}
            onCancel={handleClose}
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
                  value={formValues.course_description}
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
                <Select
                  defaultValue={formValues.program_name}
                  onChange={handleProgramSelect}
                >
                  <Option value="">--Choose a Program--</Option>
                  <Option value={1}>Codercamp</Option>
                  <Option value={2}>Codersitters</Option>
                  <Option value={3}>Coderyoga</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Instructor Name:
                  </label>
                }
                style={{ width: '65%', fontSize: '1.1rem' }}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.instructor_name}
                  name="instructor_id"
                  style={{ width: 'auto', fontSize: '1.1rem' }}
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
                <Checkbox.Group
                  options={daysOfWeek}
                  defaultValue={formValues.course_days}
                />
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
                    <br></br>
                    <TimePicker.RangePicker
                      defaultValue={[
                        moment(formValues.course_start_time, 'HH:mm'),
                        moment(formValues.course_end_time, 'HH:mm'),
                      ]}
                      onChange={handleTimeChange}
                      use12Hours={true}
                      format="HH:mm"
                      name="course_time"
                    />
                    <br></br>
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
              <Form.Item
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Maximum Capacity:
                  </label>
                }
                style={{ width: '65%', fontSize: '1.1rem' }}
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_capacity}
                  name="course_capacity"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%', fontSize: '1.1rem' }}
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Minimum Age:
                  </label>
                }
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_min_age}
                  name="course_min_age"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%', fontSize: '1.1rem' }}
                label={
                  <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                    Maximum Age:
                  </label>
                }
                onChange={handleChange}
              >
                <InputNumber
                  value={formValues.course_max_age}
                  name="course_max_age"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
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
                  defaultValue={[
                    moment(formValues.course_start_date, 'YYYY-MM-DD'),
                    moment(formValues.course_end_date, 'YYYY-MM-DD'),
                  ]}
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
