import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styles
import '../../../styles/AdminStyles/AdminEditCourseFormStyles.less';
import { Input, Form, Checkbox, InputNumber, DatePicker, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const { RangePicker } = DatePicker;

const initialFormValues = {
  course_id: '',
  course_name: '',
  course_desc: '',
  course_days: '',
  course_capacity: '',
  course_max_age: '',
  course_min_age: '',
  course_start_date: '',
  course_end_date: '',
  course_start_time: '',
  course_end_time: '',
  course_location: '',
  course_num_sessions: '',
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
  const { handleOk, handleCancel, isModalVisible } = props;

  // const history = useHistory();

  const handleSubmit = () => {
    handleOk(formValues);
  };

  // const handleCancel = e => {
  //   history.push('/admin-course-details');
  // };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const checkDays = dayTBC => {
    // let exists = formValues.course_days.filter(day => day === dayTBC);
    // if (exists.length === 1) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  return (
    <div className="edit-course-disp">
      <div className="edit-courses-form-container">
        <section className="form-items-container">
          <Modal
            visible={isModalVisible}
            title="Admin Add Class Form"
            okText={!formValues.course_id ? 'Add Course' : 'Update Course'}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <Form layout="vertical">
              <Form.Item
                label={<label style={{ color: '#096A70' }}>Course Name:</label>}
                style={{ width: '65%' }}
                className="input-label"
              >
                <Input
                  onChange={handleChange}
                  value={formValues.course_name}
                  name="course_name"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: '#096A70' }}>
                    Course Description:
                  </label>
                }
                style={{ width: '75%', color: '#096A70' }}
                className="input-label"
                onChange={handleChange}
                type="text"
              >
                <TextArea
                  value={formValues.course_desc}
                  name="course_desc"
                  style={{ height: 100 }}
                />
              </Form.Item>

              <Form.Item
                label={
                  <label style={{ color: '#096A70' }}>Days of the Week:</label>
                }
                valuePropName="checked"
                style={{ width: '100%' }}
              >
                <Checkbox className="day" defaultChecked={checkDays('Monday')}>
                  Monday
                </Checkbox>
                <Checkbox className="day" defaultChecked={checkDays('Tuesday')}>
                  Tuesday
                </Checkbox>
                <Checkbox
                  className="day"
                  defaultChecked={checkDays('Wednesday')}
                >
                  Wednesday
                </Checkbox>
                <Checkbox
                  className="day"
                  defaultChecked={checkDays('Thursday')}
                >
                  Thursday
                </Checkbox>
                <Checkbox className="day" defaultChecked={checkDays('Friday')}>
                  Friday
                </Checkbox>
                <Checkbox
                  className="day"
                  defaultChecked={checkDays('Saturday')}
                >
                  Saturday
                </Checkbox>
                <Checkbox className="day" defaultChecked={checkDays('Sunday')}>
                  Sunday
                </Checkbox>
              </Form.Item>

              <Form.Item
                label={
                  <label style={{ color: '#096A70' }}>Maximum Capacity:</label>
                }
                style={{ width: '65%' }}
              >
                <InputNumber
                  value={formValues.course_capacity}
                  name="course_capacity"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%' }}
                label={<label style={{ color: '#096A70' }}>Minimum Age:</label>}
              >
                <InputNumber
                  value={formValues.course_min_age}
                  name="course_min_age"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '65%' }}
                label={<label style={{ color: '#096A70' }}>Maximum Age:</label>}
              >
                <InputNumber
                  value={formValues.course_max_age}
                  name="course_max_age"
                />
              </Form.Item>
              <Form.Item
                {...rangeConfig}
                label={
                  <label style={{ color: '#096A70' }}>Date and Time:</label>
                }
                style={{ width: '100%' }}
              >
                <RangePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  name="course_date_time"
                />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: '#096A70' }}>Location:</label>}
                style={{ width: '65%' }}
                onChange={handleChange}
              >
                <Input
                  value={formValues.course_location}
                  name="course_location"
                />
              </Form.Item>
              <Form.Item
                style={{ width: '80%' }}
                label={
                  <label style={{ color: '#096A70' }}>
                    Number of Sessions:
                  </label>
                }
              >
                <InputNumber
                  value={formValues.course_num_sessions}
                  name="course_num_sessions"
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
