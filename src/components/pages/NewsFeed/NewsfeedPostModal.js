import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../../styles/InstructorStyles/index.less';

const NewsfeedPostModal = () => {
  let history = useHistory();
  const [formValue, setformValue] = useState({
    link: '',
    description: '',
    title: '',
  });

  const handleChange = e => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const token=JSON.parse(localStorage.getItem('okta-token-storage'));

  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` }
};
  const handleSubmit = () => {
    // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
    // console.log(token.idToken.value);

    axios
      .post('https://coder-heroes-api.herokuapp.com/news', formValue,config)
      .then(resp => {
        console.log(resp);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });


  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };
  return (
    <div className="newsfeedForm_container">
      <div className="newsfeedForm_header">
        <h1>Create New Post</h1>
        <h2>x</h2>
      </div>
      <Form onFinish={handleSubmit}>
        <div className="newsfeedForm_input_container">
          <Form.Item name={['Post Title']} label="Post Title:">
            <Input name="title" onChange={handleChange} />
          </Form.Item>
          <Form.Item name={['link']} label="Author Name:">
            <Input name="link" onChange={handleChange} />
          </Form.Item>
        </div>
        <div className="newsfeedForm_inputfield">
          <Form.Item name={['Post Contents']} label="Post Contents:" />
          <Input.TextArea
            name="description"
            onChange={handleChange}
            className="newsfeedForm_inputfield_textarea"
          />
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            className="newsfeedForm_submit_button"
            type="primary"
            shape="round"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewsfeedPostModal;
