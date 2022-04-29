import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  getPrograms,
  getCourses,
  addProgram,
  setError,
} from '../../../redux/actions/instructorActions';
import '../../../styles/InstructorStyles/addCourse.less';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form, Button, Layout, Typography, Modal } from 'antd';
import schema from './InstructorAddCourseFormSchema';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Content } = Layout;
const { Title, Text } = Typography;

//dummy data

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const initialClassDataState = {
  course_type: '',
  course_name: '',
  day: '', //needs to be added to backend
  size: '',
  min_age: '', //needs to be added to backend
  max_age: '', //needs to be added to backend
  start_time: '',
  end_time: '',
  start_date: '',
  end_date: '',
  sessions: '', //needs to be added to backend
  location: '',
  open_seats_remaining: '',
  instructor_id: '',
};

const initialClassDataStateFormErrors = {
  course_type: '',
  course_name: '',
  day: '',
  size: '',
  min_age: '',
  max_age: '',
  start_time: '',
  end_time: '',
  start_date: '',
  end_date: '',
  sessions: '',
  location: '',
};

const InstructorAddCourseForm = props => {
  const [classData, setClassData] = useState(initialClassDataState);
  const [formErrors, setFormErrors] = useState(initialClassDataStateFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    validate(name, value);
    setClassData({
      ...classData,
      [name]: value,
    });
  };

  //will add handleSubmit after conditional rendering with success modal
  // eslint-disable-next-line
  const handleSubmit = e => {
    e.preventDefault();
    setClassData({
      ...classData,
      open_seats_remaining: classData.size,
      instructor_id: 1, //change to id of current logged in instructor once we connect redux
    });
    props.addProgram(classData);
    setClassData(initialClassDataState);
  };

  useEffect(() => {
    schema.isValid(classData).then(valid => setDisabled(!valid));
  }, [classData]);

  function success() {
    Modal.success({
      content: 'You have successfully created a course!',
      title: 'Congratulations!',
    });
  }

  return (
    <Layout>
      <Content className="iac__section__wrap">
        <div>
          <div className="iac__container">
            {/* Title / Top Container */}
            <div className="iac__top__container">
              <Title className="iac__title">Add New Course</Title>
              <Text className="iac__intro">
                Enter the required information below to Create a new Course. You
                can handleChange
                <br />
                it anytime you want.
              </Text>
            </div>
          </div>
          {/* Horizontal Line */}
          <div
            style={{
              borderTop: '3px solid #FEAD2A ',
              marginTop: 20,
              marginBottom: 20,
            }}
          ></div>
          {/* Form Div Container */}
          <div className="iac__forms">
            <div className="iac__first__form__section">
              {/* Form Starts Here */}
              <Form
                wrapperCol={{ span: 50 }}
                layout="horizontal"
                className="iac__first__form"
                errors={formErrors}
                onChange={handleChange}
              >
                {/* Course Name */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item className="form__one">
                    <label for="classLink">Course Name</label>
                    <Input
                      value={classData.course_name}
                      name="course_name"
                      placeholder="Enter Course Name here"
                      className="course__name"
                    />
                  </Form.Item>
                </div>
                {/* Program Type */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="programType">Program Type</label>
                    <Select
                      placeholder="Select a Program"
                      name="program_type"
                      className="program__type"
                    >
                      {getCourses(course => (
                        <Option value={course}>{course}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Form>
            </div>
            {/* Second Form Section */}
            <div className="iac__second__form__section">
              <Form
                wrapperCol={{ span: 50 }}
                layout="horizontal"
                className="iac__second__form"
                errors={formErrors}
                onChange={handleChange}
              >
                {/* Day */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="day">Day</label>
                    <Select
                      name="day"
                      placeholder="Select a day"
                      className="day"
                    >
                      {days.map(day => (
                        <Option value={day}>{day}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                {/* Class Size */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="classSize">Class Size</label>
                    <Input
                      type="number"
                      value={classData.size}
                      name="size"
                      min="1"
                      placeholder="Select a Class Size"
                      className="class__size"
                    />
                    <span className="iadc__errors">{formErrors.size}</span>
                  </Form.Item>
                </div>
                {/* Total Sessions */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="sessions">Total Sessions</label>
                    <Input
                      type="number"
                      placeholder="Set Total Sessions"
                      value={classData.sessions}
                      name="sessions"
                      min="1"
                      className="total__sessions"
                    />
                    <span className="iadc__errors">{formErrors.sessions}</span>
                  </Form.Item>
                </div>
              </Form>
            </div>
            {/* Third Form Section */}
            <div className="iac__third__form__section">
              {/* Left Section */}
              <div className="iac__left">
                <Form
                  wrapperCol={{ span: 50 }}
                  layout="horizontal"
                  className="iac__third__left__form"
                  errors={formErrors}
                  onChange={handleChange}
                >
                  {/* Start Date */}
                  <div style={{ marginRight: '4rem' }}>
                    <Form.Item>
                      <label for="startDate">Start Date</label>
                      <Input
                        prefix={<CalendarOutlined />}
                        type="date"
                        value={classData.start_date}
                        name="start_date"
                        className="start__date"
                      />
                      <span className="iadc__errors">
                        {formErrors.start_date}
                      </span>
                    </Form.Item>
                  </div>
                  {/* End Date */}
                  <div style={{ marginRight: '4rem' }}>
                    <Form.Item>
                      <label for="endDate">End Date</label>
                      <Input
                        prefix={<CalendarOutlined />}
                        type="date"
                        value={classData.end_date}
                        name="end_date"
                        className="end__date"
                      />
                      <span className="iadc__errors">
                        {formErrors.end_date}
                      </span>
                    </Form.Item>
                  </div>
                </Form>
              </div>
              {/* Right Section */}
              <div className="iac__right">
                <Form
                  wrapperCol={{ span: 50 }}
                  layout="horizontal"
                  className="iac__third__right__form"
                  errors={formErrors}
                  onChange={handleChange}
                >
                  {/* Start Time */}
                  <div style={{ marginRight: '4rem' }}>
                    <Form.Item>
                      <label for="startTime">Start Time</label>
                      <Input
                        prefix={<ClockCircleOutlined />}
                        type="time"
                        value={classData.start_time}
                        name="start_time"
                        className="start__time"
                      />
                      <span className="iadc__errors">
                        {formErrors.start_time}
                      </span>
                    </Form.Item>
                  </div>
                  {/* End Time */}
                  <div>
                    <Form.Item>
                      <label for="endTime">End Time</label>
                      <Input
                        prefix={<ClockCircleOutlined />}
                        type="time"
                        value={classData.end_time}
                        name="end_time"
                        className="end__time"
                      />
                      <span className="iadc__errors">
                        {formErrors.end_time}
                      </span>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
            {/* Fourth Form Section */}
            <div className="iac__fourth__form__section">
              <Form
                wrapperCol={{ span: 50 }}
                layout="horizontal"
                className="iac__fourth__form"
                errors={formErrors}
                onChange={handleChange}
              >
                {/* Minimum Age */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="minAge">Minimum Student Age</label>
                    <Input
                      type="number"
                      placeholder="Set minimum number of students"
                      value={classData.min_age}
                      name="min_age"
                      min="4"
                      max="100"
                      className="min__age"
                    />
                    <span className="iadc__errors">{formErrors.min_age}</span>
                  </Form.Item>
                </div>
                {/* Maximum Age */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="maxAge">Maximum Student Age</label>
                    <Input
                      type="number"
                      placeholder="Set maximum number of students"
                      value={classData.max_age}
                      name="max_age"
                      min="4"
                      max="100"
                      className="max__age"
                    />
                    <span className="iadc__errors">{formErrors.max_age}</span>
                  </Form.Item>
                </div>
                {/* Zoom Link */}
                <div>
                  <Form.Item>
                    <label for="classLink">Class Zoom Link: </label>
                    <Input
                      value={classData.location}
                      name="location"
                      placeholder="Zoom Link goes here!"
                      className="zoom__link"
                    />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          {/* Submit Button */}
          <div className="iac__submit">
            <Button
              style={{ marginBottom: '1rem', alignContent: 'center' }}
              action="submit"
              type="submit"
              htmlType="submit"
              className="submitButton"
              onClick={success}
              disabled={!disabled}
            >
              Create New Course
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, { addProgram, setError })(
  InstructorAddCourseForm
);
