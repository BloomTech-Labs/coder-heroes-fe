import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import '../../../styles/ParentStyles/index.less';

const CreateNewStudent = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    //   Potential axios POST call here? Need to research AntDesign more
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    //   Does error handling go in Axios POST call, or here on its own? More research needed
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <Form
      {...layout}
      name="add-student"
      className="create-new-student-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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

      <Form.Item
        label="Email"
        name={['student', 'email']}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            type: 'email',
          },
        ]}
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
