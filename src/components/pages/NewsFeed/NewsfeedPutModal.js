import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../../styles/InstructorStyles/index.less';

const NewsfeedPutModal = () => {
  const passedInNewsIdValue=6;
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

  const handleEdit = () => {
    // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
    axios
      .put(`https://coder-heroes-api.herokuapp.com/news/${passedInNewsIdValue}`, formValue, config)
      .then(resp => {
        console.log(resp);
        history.push('/news-feed');
        //will need to add close form function or maybe even delete edit success msg
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
    axios
      .delete(`https://coder-heroes-api.herokuapp.com/news/${passedInNewsIdValue}`, config)
      .then(resp => {
        history.push('/news-feed');
        //will need to add close form function or maybe even delete edit success msg
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="newsfeedForm_container">
      <div className="newsfeedForm_header">
        <h1>Edit/Delete Post</h1>
        <h2>x</h2>
      </div>
      <Form>
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
        <div className="newsfeedForm_editDeleteButton_container">
          <div className="newsfeedForm_editDeleteButton">
            <Button
              className="newsfeedForm_edit_button"
              type="primary"
              shape="round"
              htmlType="submit"
              onClick={handleEdit}
            >
              Save Changes
            </Button>
            <Button
              className="newsfeedForm_delete_button"
              type="primary"
              shape="round"
              htmlType="submit"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewsfeedPutModal;
