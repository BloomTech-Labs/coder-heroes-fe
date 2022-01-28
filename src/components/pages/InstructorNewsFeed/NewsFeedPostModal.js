import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../../../styles/InstructorStyles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';
import { getAuthHeader } from '../../../api/index';

const NewsfeedPostModal = ({ setPostOptions }) => {
  const { authState } = useOktaAuth();
  const token = {
    headers: getAuthHeader(authState)
  };
  const [formValues, setFormValues] = useState({
    link: '',
    description: '',
    title: '',
  });

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URI}/news`, formValues, token)
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="newsfeedForm_container">
      <div className="newsfeedForm_header">
        <h1>Create New Post</h1>
        <CloseOutlined
          onClick={() => {
            setPostOptions('newsFeed');
          }}
        />
      </div>
      <Form onFinish={handleSubmit}>
        <div className="newsfeedForm_input_container">
          <Form.Item label="Post Title:">
            <Input name="title" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Link:">
            <Input name="link" onChange={handleChange} />
          </Form.Item>
        </div>
        <div className="newsfeedForm_inputfield">
          <Form.Item label="Post Contents:" />
          <Input.TextArea
            name="description"
            onChange={handleChange}
            className="newsfeedForm_inputfield_textarea"
          />
        </div>
        <div className="newsfeedForm_submit_button_container">
          <Button
            className="newsfeedForm_submit_button"
            type="primary"
            shape="round"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewsfeedPostModal;
