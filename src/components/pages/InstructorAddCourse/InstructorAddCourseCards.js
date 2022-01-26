import React, { useState } from 'react';
import { addProgram, setError } from '../../../redux/actions/instructorActions';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form } from 'antd';
import { timeConverter } from '../../common/timeHelpers';

const { Option } = Select;

//below are the options for "new program" details to map from in the return section
const classSize = ['1', '2-5', '6-10', '10-15'];
const durations = ['45 min', '60 min', '90 min'];
const dates = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const times = [
  '08:00:00',
  '09:00:00',
  '10:00:00',
  '11:00:00',
  '12:00:00',
  '13:00:00',
  '14:00:00',
  '15:00:00',
  '16:00:00',
  '17:00:00',
  '18:00:00',
  '19:00:00',
];
const sessions = ['1', '2', '3', '4', '5', '6', '7', '8'];
const ages = ['3-6', '7-10', '10-15'];

const InstructorAddCourseCards = props => {
  const [classData, setClassData] = useState({
    course_type_id: '',
    size: '',
    open_seats_remaining: '',
    instructor_id: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    location: '',
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
            <label htmlFor="classSize">Class Size: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  classSize: value,
                });
              }}
            >
              {classSize.map(classSize => (
                <Option value={classSize}>{classSize}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* <Form.Item>
            <label htmlFor="sessions">Total Sessions: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  session: value,
                });
              }}
            >
              {sessions.map(session => (
                <Option value={session}>{session}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label htmlFor="duration">Course Duration: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  duration: value,
                });
              }}
            >
              {durations.map(duration => (
                <Option value={duration}>{duration}</Option>
              ))}
            </Select>
          </Form.Item> */}

          <Form.Item>
            <label htmlFor="startDate">Start Date: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  dates: value,
                });
              }}
            >
              {dates.map(date => (
                <Option value={date}>{date}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label htmlFor="endDate">End Date: </label>
            <Input value={classData.end_date} name="end_date" />
          </Form.Item>

          <Form.Item>
            <label htmlFor="startTime">Start Time: </label>
            <Select
              onChange={value => {
                setClassData({
                  ...classData,
                  times: value,
                });
              }}
            >
              {times.map(time => (
                <Option value={time}>{timeConverter(time)}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label htmlFor="endTime">End Time: </label>
            <Input value={classData.end_time} name="end_time" />
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
//export default InstructorAddCourseCards
export default connect(mapStateToProps, { addProgram, setError })(
  InstructorAddCourseCards
);
