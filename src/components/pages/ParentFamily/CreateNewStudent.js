import React from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { Form, Input, Button, InputNumber } from 'antd';
import '../../../styles/ParentStyles/index.less';
import { useOktaAuth } from '@okta/okta-react';

const CreateNewStudent = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { authState } = useOktaAuth();
  const { idToken } = authState;

  const onFinish = values => {
    axiosWithAuth(idToken)
      .post('/children', values.student)
      .then(resp => {
        // Post is posting proper required information. There is a bug/desync on the BE side that prevents us currently from seeing our response or handling a successful promise.
        // Once the 500 error is cleared from BE, FE devs can see the response and choose with the stakeholder how/if they want to notify the user of a successful post here.
        console.log(resp);
      })
      .catch(error => {
        console.log({ error });
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
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
