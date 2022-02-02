import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios'; // (this line of code can be deleted after PR130 get merged to the main branch)
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';  // (this line of code can be deleted after PR130 get merged to the main branch)
import { getAuthHeader } from '../../../api/index'; // (this line of code can be deleted after PR130 get merged to the main branch)
import axiosWithAuth from '../../../utils/axiosWithAuth';
const NewsfeedPostModal = ({ setPostOptions }) => {
  // (this code can be deleted after PR130 get merged to the main branch)
  // const { authState } = useOktaAuth(); 
  // const token = {
  //   headers: getAuthHeader(authState)
  // };
  const [formValues, setFormValues] = useState({
    link: '',
    description: '',
    title: '',
  });
  const {link,description,title}=formValues;
  function ValidateNewsFeedFormButton(){
    if (link.trim() && description.trim() && title.trim()){
      return <Button
      className="newsfeedForm_submit_button"
      type="primary"
      shape="round"
      htmlType="submit"
    >
      Submit
    </Button>;
    } else {
      return <Button
      className="newsfeedForm_submit_button"
      type="primary"
      shape="round"
      htmlType="submit"
      disabled
    >
      Complete the Form
    </Button>;
    };
  };
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    axiosWithAuth()
      .post(`/news`, formValues)
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.error(err);
      });
  };
  // (this code can be deleted after PR130 get merged to the main branch)
  // const handleSubmit = () => {
  //   axios
  //     .post(`${process.env.REACT_APP_API_URI}/news`, formValues, token)
  //     .then(resp => {
  //       setPostOptions('newsFeed');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

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
          <ValidateNewsFeedFormButton/>
        </div>
      </Form>
    </div>
  );
};

export default NewsfeedPostModal;