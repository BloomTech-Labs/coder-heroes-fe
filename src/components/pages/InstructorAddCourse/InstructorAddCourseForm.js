import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { addProgram, setError } from '../../../redux/actions/instructorActions';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Select, Input, Form, Button } from 'antd';
import schema from './InstructorAddCourseFormSchema';

const { Option } = Select;

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
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            marginTop: 30,
            fontSize: 20,
          }}
        >
          You can submit a new course below!
        </h1>
      </div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          wrapperCol={{ span: 50 }}
          layout="horizontal"
          className="iadc__form"
          errors={formErrors}
          onChange={handleChange}
        >
          <Form.Item>
            <label for="courseType">Course Type: </label>
            <Select placeholder="Select a course" name="course_type">
              {programs.map(course => (
                <Option value={course}>{course}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label for="classLink">Course Name: </label>
            <Input
              value={classData.course_name}
              name="location"
              placeholder="Course name goes here!"
            />
          </Form.Item>

          <Form.Item>
            <label for="day">Day: </label>
            <Select name="day" placeholder="Select a day">
              {days.map(day => (
                <Option value={day}>{day}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <label for="classSize">Class Size: </label>
            <Input
              type="number"
              value={classData.size}
              name="size"
              min="1"
              placeholder="Determine class size"
            />
            <span className="iadc__errors">{formErrors.size}</span>
          </Form.Item>

          <Form.Item>
            <label for="minAge">Minimum Student Age: </label>
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

          <Form.Item>
            <label for="maxAge">Maximum Student Age: </label>
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

          <Form.Item>
            <label for="startTime">Start Time: </label>
            <Input type="time" value={classData.start_time} name="start_time" />
            <span className="iadc__errors">{formErrors.start_time}</span>
          </Form.Item>

          <Form.Item>
            <label for="endTime">End Time: </label>
            <Input type="time" value={classData.end_time} name="end_time" />
            <span className="iadc__errors">{formErrors.end_time}</span>
          </Form.Item>

          <Form.Item>
            <label for="startDate">Start Date: </label>
            <Input type="date" value={classData.start_date} name="start_date" />
            <span className="iadc__errors">{formErrors.start_date}</span>
          </Form.Item>

          <Form.Item>
            <label for="endDate">End Date: </label>
            <Input type="date" value={classData.end_date} name="end_date" />
            <span className="iadc__errors">{formErrors.end_date}</span>
          </Form.Item>

          <Form.Item>
            <label for="sessions">Total Sessions: </label>
            <Input
              type="number"
              placeholder="Set Total Sessions"
              value={classData.sessions}
              name="sessions"
              min="1"
            />
            <span className="iadc__errors">{formErrors.sessions}</span>
          </Form.Item>

          <Form.Item>
            <label for="classLink">Class Zoom Link: </label>
            <Input
              value={classData.location}
              name="location"
              placeholder="Zoom Link goes here!"
            />
          </Form.Item>
          <span className="iadc__errors">{formErrors.location}</span>
          {/* The above input could be changed in the future to have radio buttons that choose between in person and virtual options */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              style={{ marginBottom: '1rem' }}
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Submit!
            </Button>
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
  InstructorAddCourseForm
);
