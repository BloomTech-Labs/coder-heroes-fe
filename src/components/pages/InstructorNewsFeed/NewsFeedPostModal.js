import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';
import { setPostOptions } from '../../../redux/actions/instructorActions';

const NewsfeedPostModal = props => {
  const [formValues, setFormValues] = useState({
    link: '',
    description: '',
    title: '',
  });
  const { link, description, title } = formValues;

  const dispatch = useDispatch();

  function ValidateNewsFeedFormButton() {
    if (link.trim() && description.trim() && title.trim()) {
      return (
        <Button
          className="newsfeedForm_submit_button"
          type="primary"
          shape="round"
          htmlType="submit"
        >
          Submit
        </Button>
      );
    } else {
      return (
        <Button
          className="newsfeedForm_submit_button"
          type="primary"
          shape="round"
          htmlType="submit"
          disabled
        >
          Complete the Form
        </Button>
      );
    }
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const handleSubmit = () => {
    axiosWithAuth(idToken)
      .post(`/news`, formValues)
      .then(resp => {
        dispatch(setPostOptions('newsFeed'));
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
            dispatch(setPostOptions('newsFeed'));
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
          <ValidateNewsFeedFormButton />
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newsfeed: state.instructorReducer.newsfeed,
    postOptions: state.instructorReducer.postOptions,
    postID: state.instructorReducer.postID,
  };
};
export default connect(mapStateToProps)(NewsfeedPostModal);
