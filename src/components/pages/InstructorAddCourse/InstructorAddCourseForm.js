import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { addProgram, setError } from '../../../redux/actions/instructorActions';
import '../../../styles/InstructorStyles/addCourse.less';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form, Button, Layout, Typography } from 'antd';
import schema from './InstructorAddCourseFormSchema';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { Content } = Layout;
const { Title, Text } = Typography;

//dummy data
const programs = ['CoderYoga', 'CoderCamp', 'CoderSitters'];

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
                <Form.Item>
                  <label for="classLink">Course Name</label>
                  <Input
                    value={classData.course_name}
                    name="location"
                    placeholder="Enter Course Name here"
                  />
                </Form.Item>
                {/* Program Type */}
                <Form.Item>
                  <label for="courseType">Program Type</label>
                  <Select placeholder="Select a Program" name="course_type">
                    {programs.map(course => (
                      <Option value={course}>{course}</Option>
                    ))}
                  </Select>
                </Form.Item>
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
                <Form.Item>
                  <label for="day">Day</label>
                  <Select name="day" placeholder="Select a day">
                    {days.map(day => (
                      <Option value={day}>{day}</Option>
                    ))}
                  </Select>
                </Form.Item>
                {/* Class Size */}
                <Form.Item>
                  <label for="classSize">Class Size</label>
                  <Input
                    type="number"
                    value={classData.size}
                    name="size"
                    min="1"
                    placeholder="Select a Class Size"
                  />
                  <span className="iadc__errors">{formErrors.size}</span>
                </Form.Item>
                {/* Total Sessions */}
                <Form.Item>
                  <label for="sessions">Total Sessions</label>
                  <Input
                    type="number"
                    placeholder="Set Total Sessions"
                    value={classData.sessions}
                    name="sessions"
                    min="1"
                  />
                  <span className="iadc__errors">{formErrors.sessions}</span>
                </Form.Item>
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
                  <Form.Item>
                    <label for="startDate">Start Date</label>
                    <Input
                      prefix={<CalendarOutlined />}
                      type="date"
                      value={classData.start_date}
                      name="start_date"
                    />
                    <span className="iadc__errors">
                      {formErrors.start_date}
                    </span>
                  </Form.Item>
                  {/* End Date */}
                  <Form.Item>
                    <label for="endDate">End Date</label>
                    <Input
                      prefix={<CalendarOutlined />}
                      type="date"
                      value={classData.end_date}
                      name="end_date"
                    />
                    <span className="iadc__errors">{formErrors.end_date}</span>
                  </Form.Item>
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
                  <Form.Item>
                    <label for="startTime">Start Time</label>
                    <Input
                      prefix={<ClockCircleOutlined />}
                      type="time"
                      value={classData.start_time}
                      name="start_time"
                    />
                    <span className="iadc__errors">
                      {formErrors.start_time}
                    </span>
                  </Form.Item>
                  {/* End Time */}
                  <Form.Item>
                    <label for="endTime">End Time</label>
                    <Input
                      prefix={<ClockCircleOutlined />}
                      type="time"
                      value={classData.end_time}
                      name="end_time"
                    />
                    <span className="iadc__errors">{formErrors.end_time}</span>
                  </Form.Item>
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
                <Form.Item>
                  <label for="minAge">Minimum Student Age</label>
                  <Input
                    type="number"
                    placeholder="Set minimum number of students"
                    value={classData.min_age}
                    name="min_age"
                    min="4"
                    max="100"
                  />
                  <span className="iadc__errors">{formErrors.min_age}</span>
                </Form.Item>
                {/* Maximum Age */}
                <Form.Item>
                  <label for="maxAge">Maximum Student Age</label>
                  <Input
                    type="number"
                    placeholder="Set maximum number of students"
                    value={classData.max_age}
                    name="max_age"
                    min="4"
                    max="100"
                  />
                  <span className="iadc__errors">{formErrors.max_age}</span>
                </Form.Item>
                {/* Zoom Link */}
                <Form.Item>
                  <label for="classLink">Class Zoom Link: </label>
                  <Input
                    value={classData.location}
                    name="location"
                    placeholder="Zoom Link goes here!"
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
          {/* Submit Button */}
          <div className="iac__submit">
            <Button
              type="primary"
              htmlType="submit"
              className="submitButton"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Create New Course
              <PlusOutlined />
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
