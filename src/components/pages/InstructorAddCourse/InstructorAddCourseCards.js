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

const InstructorAddCourseCards = props => {
  const [classData, setClassData] = useState({
    course_type_id: '',
    size: '',
    day: '',
    open_seats_remaining: '',
    instructor_id: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    location: '',
    sessions: '',
  });

  const handleChange = e => {
    setClassData({
      ...classData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addProgram(classData);
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
              {/* make an api call to course-types endpoint to get the options for this field*/}
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
            <label htmlFor="sessions">Total Sessions: </label>
            <Input
              type="number"
              value={classData.sessions}
              name="sessions"
              min="1"
            />
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
            <label htmlFor="startTime">Start Time: </label>
            <Input type="time" value={classData.start_time} name="start_time" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="endTime">End Time: </label>
            <Input type="time" value={classData.end_time} name="end_time" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="location">Location: </label>
            <Input value={classData.location} name="location" />
          </Form.Item>

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
