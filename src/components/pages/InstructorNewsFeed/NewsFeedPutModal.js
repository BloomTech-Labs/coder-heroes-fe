import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../../../styles/InstructorStyles/index.less';

export default function NewsfeedPutModal(props) {
  const { setPostOptions, key } = props;
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

  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };

  const handleEdit = () => {
    axios
      .put(
        `https://coder-heroes-api.herokuapp.com/news/${props.newsfeed_id}`,
        formValue,
        config
      )
      .then(resp => {
        console.log(resp);
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    axios
      .delete(
        `https://coder-heroes-api.herokuapp.com/news/${props.newsfeed_id}`,
        config
      )
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div key={key} className="newsfeedForm_container">
      {console.log('thisaset', props)}
      <div className="newsfeedForm_header">
        <h1>Edit/Delete Post</h1>
        <h2
          onClick={() => {
            setPostOptions('newsFeed');
          }}
        >
          x
        </h2>
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
}
