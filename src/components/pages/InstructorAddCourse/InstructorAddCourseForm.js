import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  getPrograms,
  setError,
  getUser,
} from '../../../redux/actions/instructorActions';
import '../../../styles/InstructorStyles/addCourse.less';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form, Button, Layout, Typography, Modal } from 'antd';
import schema from './InstructorAddCourseFormSchema';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../redux/actions/coursesActions';
//TO-DO: Implement Auth0

const { Option } = Select;
const { Content } = Layout;
const { Title, Text } = Typography;

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
  course_name: '',
  course_description: '',
  days_of_week: [],
  max_size: '',
  min_age: '',
  max_age: '',
  start_time: '',
  end_time: '',
  start_date: '',
  end_date: '',
  number_of_sessions: '',
  location: '',
  instructor_id: '',
  program_id: '',
};

const initialClassDataStateFormErrors = {
  course_name: '',
  course_description: '',
  days_of_week: '',
  max_size: '',
  min_age: '',
  max_age: '',
  start_time: '',
  end_time: '',
  start_date: '',
  end_date: '',
  number_of_sessions: '',
  location: '',
  instructor_id: '',
  program_id: '',
};

const InstructorAddCourseForm = props => {
  const dispatch = useDispatch();
  const [classData, setClassData] = useState(initialClassDataState);
  const [formErrors, setFormErrors] = useState(initialClassDataStateFormErrors);
  const [disabled, setDisabled] = useState(true);
  // const { idToken } = authState;
  const { programs, instructor } = props;

  // useEffect(() => {
  //   dispatch(getPrograms(idToken));
  //   dispatch(getUser(idToken));
  // }, [dispatch, idToken]);

  useEffect(() => {
    setClassData({
      ...classData,
      instructor_id: instructor.instructor_id,
    });
  }, [instructor, classData]);

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

  const handleDays = selectedDays => {
    setClassData({
      ...classData,
      days_of_week: selectedDays,
    });
  };

  const handleProgram = selectedProgram => {
    setClassData({
      ...classData,
      program_id: selectedProgram,
    });
  };

  //TO-DO: Implement Auth0
  //removed idToken from "dispatch(addCourse(idToken, classData));"
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCourse(classData));
    setClassData(initialClassDataState);
    success();
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
                    <label for="course_name">Course Name</label>
                    <Input
                      value={classData.course_name}
                      name="course_name"
                      placeholder="Enter Course Name here"
                      className="course__name"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item>
                    <label for="description">Course Description </label>
                    <Input
                      value={classData.course_description}
                      name="course_description"
                      placeholder="Enter Course Description"
                    />
                  </Form.Item>
                </div>
                {/* Program Type */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="courseType">Program Type</label>
                    <Select
                      placeholder="Select a Program"
                      name="program_id"
                      className="program__type"
                      onChange={handleProgram}
                    >
                      {programs.map(program => (
                        <Option
                          key={program.program_id}
                          value={program.program_id}
                        >
                          {program.program_name}
                        </Option>
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
                    <label for="days_of_week">Days</label>
                    <Select
                      name="days_of_week"
                      mode="multiple"
                      placeholder="Select days"
                      className="day"
                      onChange={handleDays}
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
                      value={classData.max_size}
                      name="max_size"
                      min="1"
                      placeholder="Select a Class Size"
                      className="class__size"
                    />
                    <span className="iadc__errors">{formErrors.max_size}</span>
                  </Form.Item>
                </div>
                {/* Total Sessions */}
                <div style={{ marginRight: '5rem' }}>
                  <Form.Item>
                    <label for="sessions">Total Sessions</label>
                    <Input
                      type="number"
                      placeholder="Set Total Sessions"
                      value={classData.number_of_sessions}
                      name="number_of_sessions"
                      min="1"
                      className="total__sessions"
                    />
                    <span className="iadc__errors">
                      {formErrors.number_of_sessions}
                    </span>
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
              onClick={handleSubmit}
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
    programs: state.instructorReducer.own_programs,
    instructor: state.instructorReducer.instructor_data,
  };
};

export default connect(mapStateToProps, {
  getPrograms,
  setError,
  getUser,
  addCourse,
})(InstructorAddCourseForm);
