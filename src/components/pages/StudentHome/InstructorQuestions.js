import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

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
/* eslint-enable no-template-curly-in-string */

const InstructorQuestions = () => {
  const onFinish = values => {
    console.log(values);
  };

  const [visible, setVisible] = useState(false);

  function showAboutMe() {
    setVisible(!visible);
  }
  return visible ? (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="What brought you to Coder Heroes?"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={['user', 'website']}
        label="What about coding interests you?"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={showAboutMe}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Button type="primary" onClick={showAboutMe}>
      {' '}
      Tell me about yourself
    </Button>
  );
};

export default InstructorQuestions;
