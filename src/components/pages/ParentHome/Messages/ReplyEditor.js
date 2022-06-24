import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Comment, Form, Button, List, Input } from 'antd';
import '../../../../styles/ParentStyles/messages.less';
import { useDispatch, connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { addMessage } from '../../../../redux/actions/userActions';
import { getCurrentUser } from '../../../../redux/actions/userActions';
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const ReplyEditor = (props, { onChange, onSubmit }) => {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const { authState, oktaAuth } = useOktaAuth();
  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
  }, []);
  useLayoutEffect(() => {
    console.log(props);
  }, [props]);
  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      console.log(props);
      addMessage(
        authState.idToken,
        value,
        props.currentUser.profile_id,
        value,
        props.getActiveConversation
          ? props.getActiveConversation[0].sender_id
          : 0
      );
    }, 1000);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      {}
      <Comment
        className="text-box"
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.currentUser,
    getActiveConversation: state.userReducer.activeConversation,
  };
};
export default connect(mapStateToProps)(ReplyEditor);
