import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import axiosWithAuth from '../../../utils/axiosWithAuth';

export default function NewsfeedPutModal(props) {
  const { setPostOptions, postID } = props;
  const [formValues, setFormValues] = useState({
    link: '',
    description: '',
    title: '',
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/news/${postID}`)
      .then(resp => {
        setFormValues({
          ...formValues,
          link: resp.data.link,
          description: resp.data.description,
          title: resp.data.title,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []); // eslint-disable-line
  const handleChange = e => {
    setFormValues({
      ...formValues,

      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    axiosWithAuth()
      .put(`/news/${postID}`, formValues)
      .then(resp => {
        setPostOptions('newsFeed');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/news/${postID}`)
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
          }}
        />
      </div>
      <Form>
        <div className="newsfeedForm_input_container">
          <Form.Item label="Post Title:">
            <Input
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Link:">
            <Input
              name="link"
              value={formValues.link}
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        <div className="newsfeedForm_inputfield">
          <Form.Item label="Post Contents:" />
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
