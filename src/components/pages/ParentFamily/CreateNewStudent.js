import React from 'react';
import axios from 'axios';
// import axiosWithAuth from '../../../utils/axiosWithAuth';
import { Form, Input, Button, InputNumber } from 'antd';
import '../../../styles/ParentStyles/index.less';

//TO-DO: Implement Auth0
const CreateNewStudent = props => {
  const { setAddStudentVisible, setAlertMsg } = props;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  //TO-DO: Implement axiosWithAuth once we've adjusted it to work with Auth0
  const onFinish = values => {
    // axiosWithAuth(idToken)
    //   .post('/children', values.student)
    Promise.resolve({ data: [], message: '' })
      .then(resp => {
        setAddStudentVisible(false);
        setAlertMsg(1);
      })
      .catch(error => {
        console.log({ error });
        setAddStudentVisible(false);
        setAlertMsg(2);
      });
  };

  const validateMessages = {
    // required: '${label} is required!',
    // types: {
    //   number: '${label} is not a valid number!',
    // },
    // number: {
    //   range: '${label} must be between ${min} and ${max}',
    // },
  };

  return (
    <Form
      {...layout}
      name="add-student"
      className="create-new-student-form"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Student Name"
        name={['student', 'name']}
        rules={[
          { required: true, message: "Please input your student's name!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name={['student', 'age']}
        rules={[
          {
            required: true,
            message: "Please input your student's age!",
            type: 'number',
            min: 0,
            max: 19,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Username"
        name={['student', 'username']}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateNewStudent;
