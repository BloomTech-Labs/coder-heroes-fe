import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import {
  getNewsFeed,
  putNewsFeed,
  deleteNewsFeed,
  setPostOptions,
} from '../../../redux/actions/instructorActions';

//TO-DO: Implement Auth0
function NewsFeedPutModal(props) {
  const { postID, link, title, description, posted_at } = props;
  // const { idToken } = authState;

  const [formValues, setFormValues] = useState({
    link: link,
    title: title,
    description: description,
    posted_at: posted_at,
  });

  const dispatch = useDispatch();

  //removed idToken from getNewsFeed params
  useEffect(() => {
    dispatch(getNewsFeed(postID, posted_at));
  }, []);

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = event => {
    setFormValues({
      ...formValues,
    });

    //removed idToken from putNewsFeed params
    dispatch(putNewsFeed(postID, formValues, posted_at));

    dispatch(setPostOptions('newsFeed'));
    event.preventDefault();
  };

  //removed idToken from deleteNewsFeed params
  const handleDelete = event => {
    dispatch(deleteNewsFeed(postID));

    dispatch(setPostOptions('newsFeed'));
    event.preventDefault();
  };

  return (
    <div key={postID} className="newsfeedForm_container">
      <div className="newsfeedForm_header">
        <h1>Edit/Delete Post</h1>
        <CloseOutlined
          onClick={() => {
            dispatch(setPostOptions('newsFeed'));
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

const mapStateToProps = state => {
  return {
    newsfeed: state.instructorReducer.newsfeed,
    postOptions: state.instructorReducer.postOptions,
    postID: state.instructorReducer.postID,
    link: state.instructorReducer.link,
    title: state.instructorReducer.title,
    description: state.instructorReducer.description,
    posted_at: state.instructorReducer.posted_at,
  };
};
export default connect(mapStateToProps)(NewsFeedPutModal);
