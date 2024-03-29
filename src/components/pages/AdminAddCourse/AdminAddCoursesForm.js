import React, { useState } from 'react';
// import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useDispatch } from 'react-redux';
// BELOW: THE GETCURRENTUSER77 WILL LIKELY BE USED WHEN WE ADD AUTHENTICATION BACK INTO THE APP.
// import { getCurrentUser } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import moment from 'moment'; you may need this for auto-pop
import { editCourse, addCourse } from '../../../redux/actions/coursesActions';

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

//TO-DO: Implement Auth0
const { Option } = Select;

const initialFormValues = {
  course_id: '',
  course_location: '',
  course_name: '',
  course_description: '',
  days_of_week: [],
  max_size: '',
  max_age: '',
  min_age: '',
  start_date: '',
  end_date: '',
  start_time: '',
  end_time: '',
  number_of_sessions: '',
  instructor_id: '',
};

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
  const { courseinfo } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const numberFields = [
    {
      text: 'Maximum Capacity',
      name: 'max_size',
      value: formValues.course_capacity,
    },
    {
      text: 'Maximum Age',
      name: 'max_age',
      value: formValues.course_max_age,
    },
    {
      text: 'Minimum Age',
      name: 'min_age',
      value: formValues.course_min_age,
    },
  ];
  const [formPreReqs, setFormPreReqs] = useState({ prereq: '' });

  const daysOfWeek = [];

  const showModal = () => {
    setIsModalVisible(true);
    if (props.button_name === 'Edit Course') {
      setFormValues({
        course_id: courseinfo.course_id,
        course_location: courseinfo.course_location,
        course_name: courseinfo.course_name,
        course_description: courseinfo.course_description,
        days_of_week: courseinfo.days_of_week,
        max_size: courseinfo.max_size,
        max_age: courseinfo.max_age,
        min_age: courseinfo.min_age,
        start_date: courseinfo.start_date,
        end_date: courseinfo.end_date,
        start_time: courseinfo.start_time,
        end_time: courseinfo.end_time,
        number_of_sessions: courseinfo.number_of_sessions,
        instructor_id: courseinfo.instructor_id,
      });
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const { dispatch } = useDispatch();

  const handleSubmit = e => {
    if (props.button_name === 'Add Course') {
      dispatch(addCourse(formValues));
    } else {
      dispatch(editCourse(formValues));
      alert('Edits Submitted!');
    }

    setIsModalVisible(false);
    window.location.reload();
  };

  let history = useHistory();

  //TO-DO: Implement axiosWithAuth once we've adjusted it to work with Auth0

  //currently being blocked from the BE due to only a instructor can add courses.. BE middleware will need to be added for admin.
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .post('/courses', formValues)
  //     .then(() => {
  //       history.push('/admin-courses');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   const merged = {
  //     ...formValues,
  //     prereq: placeHolder,
  //   };
  //   program_list.push(props.addClass(merged).payload);
  //   setFormValues(initialFormValues);
  //   clearPrereq();
  // }

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
        days_of_week: [...formValues.days_of_week, e.target.value],
      });
    } else {
      setFormValues({
        ...formValues,
        days_of_week: formValues.days_of_week.filter(
          value => value !== e.target.value
        ),
      });
    }
  };

  const handleDateChange = value => {
    setFormValues({
      ...formValues,
      start_date: value[0].format('MM/DD/YYYY'),
      end_date: value[1].format('MM/DD/YYYY'),
    });
  };

  const handleTimeChange = value => {
    setFormValues({
      ...formValues,
      start_time: value[0].format('hh:mm:ss'),
      end_time: value[1].format('hh:mm:ss'),
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
            title={
              props.button_name === 'Add Course' ? 'Add Course' : 'Edit Course'
            }
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
                    Course Syllabus:
                  </label>
                }
                style={{ width: '75%', color: '#096A70', fontSize: '1.1rem' }}
                className="input-label"
                type="url"
                onChange={handleChange}
              >
                <Input
                  value={formValues.syllabus_link}
                  name="syllabus_link"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Item>
              {props.button_name === 'Add Course' ? (
                <>
                  <Form.Item
                    label={
                      <label style={{ color: '#096A70', fontSize: '1.1rem' }}>
                        Program:
                      </label>
                    }
                    style={{
                      width: '75%',
                      color: '#096A70',
                      fontSize: '1.1rem',
                    }}
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
                        Instructor Name:
                      </label>
                    }
                    style={{ width: '65%', fontSize: '1.1rem' }}
                    onChange={handleChange}
                  >
                    <InputNumber
                      name="instructor_id"
                      style={{ width: 'auto', fontSize: '1.1rem' }}
                    />
                  </Form.Item>
                </>
              ) : null}
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
                  options={[
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ]}
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
                <TimePicker.RangePicker
                  onChange={handleTimeChange}
                  use12Hours={true}
                  format="HH:mm"
                  name="course_time"
                />
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
                  value={formValues.number_of_sessions}
                  name="number_of_sessions"
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
