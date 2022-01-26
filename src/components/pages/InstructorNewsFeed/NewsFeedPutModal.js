import React, { useState,useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../../../styles/InstructorStyles/index.less';
import { CloseOutlined } from '@ant-design/icons';
export default function NewsfeedPutModal(props) {
  const { setPostOptions, postID } = props;
  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };
  const [formValues, setFormValues] = useState({
    link: '',
    description: '',
    title: '',
  });
  
  useEffect(()=>{
    axios
      .get(`https://coder-heroes-api.herokuapp.com/news/${postID}`, config)
      .then(resp => {
        setFormValues({
          ...formValues,
          link:resp.data.link,
          description:resp.data.description,
          title: resp.data.title
        });
      })
      .catch(err => {
        console.log('error fetching newsfeed');
      });
  },[]);
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    axios
      .put(
        `https://coder-heroes-api.herokuapp.com/news/${postID}`,
        formValues,
        config
      )
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    axios
      .delete(`https://coder-heroes-api.herokuapp.com/news/${postID}`, config)
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div key={postID} className="newsfeedForm_container">
      <div className="newsfeedForm_header">
        <h1>Edit/Delete Post</h1>
        <CloseOutlined  
          onClick={() => {
            setPostOptions('newsFeed');
          }}/>
      </div>
      <Form>
        <div className="newsfeedForm_input_container">
          <Form.Item label="Post Title:">
            <Input name="title" value={formValues.title} onChange={handleChange} />
          </Form.Item>
          <Form.Item  label="Link:">
            <Input name="link" value={formValues.link} onChange={handleChange} />
          </Form.Item>
        </div>
        <div className="newsfeedForm_inputfield">
          <Form.Item  label="Post Contents:" />
          <Input.TextArea
            name="description"
            onChange={handleChange}
            className="newsfeedForm_inputfield_textarea"
            value={formValues.description}
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
