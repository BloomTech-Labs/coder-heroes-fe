import React, { useState } from 'react';
import { addProgram, setError } from '../../../redux/actions/instructorActions';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form } from 'antd';

const { Option } = Select;

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
  course_type_id: '',
  day: '', //needs to be added to backend
  size: '',
  start_time: '',
  end_time: '',
  start_date: '',
  end_date: '',
  sessions: '', //needs to be added to backend
  location: '',
  open_seats_remaining: '',
  instructor_id: '',
};

const InstructorAddCourseCards = props => {
  const [classData, setClassData] = useState(initialClassDataState);

  const handleChange = e => {
    setClassData({
      ...classData,
      [e.target.name]: e.target.value,
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

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ marginTop: 30, fontSize: 20 }}>
          You can submit new program below!
        </h1>
      </div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          wrapperCol={{ span: 50 }}
          layout="horizontal"
          onChange={handleChange}
        >
          <Form.Item>
            <label htmlFor="courseType">Course Type: </label>
            <Select>
              {/* we need to create an endpoint with an instructor's approved courses for this */}
            </Select>
          </Form.Item>

          <Form.Item>
            <label htmlFor="day">Day: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  days: value,
                });
              }}
            >
              {days.map(day => (
                <Option value={day}>{day}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label htmlFor="classSize">Class Size: </label>
            <Input type="number" value={classData.size} name="size" min="1" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="startTime">Start Time: </label>
            <Input type="time" value={classData.start_time} name="start_time" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="endTime">End Time: </label>
            <Input type="time" value={classData.end_time} name="end_time" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="startDate">Start Date: </label>
            <Input type="date" value={classData.start_date} name="start_date" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="endDate">End Date: </label>
            <Input type="date" value={classData.end_date} name="end_date" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="sessions">Total Sessions: </label>
            <Input
              type="number"
              value={classData.sessions}
              name="sessions"
              min="1"
            />
          </Form.Item>

          <Form.Item>
            <label htmlFor="classLink">Class Zoom Link: </label>
            <Input value={classData.location} name="location" />
          </Form.Item>
          {/* The above input could be changed in the future to have radio buttons that choose between in person and virtual options */}

          {props.errorMessage && <div>Error: {props.errorMessage}</div>}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleSubmit}>Submit!</button>
          </div>
        </Form>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, { addProgram, setError })(
  InstructorAddCourseCards
);
