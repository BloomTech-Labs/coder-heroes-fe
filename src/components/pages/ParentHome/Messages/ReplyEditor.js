import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Comment, Form, Button, Input } from 'antd';
import '../../../../styles/ParentStyles/messages.less';
import { useDispatch, connect } from 'react-redux';
import { addMessage } from '../../../../redux/actions/userActions';
import { getCurrentUser } from '../../../../redux/actions/userActions';

//TO-DO: Implement Auth0
const { TextArea } = Input;

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
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useLayoutEffect(() => {}, [props]);
  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);
    setSubmitting(false);
    setValue('');
    dispatch(
      addMessage(
        value,
        props.getActiveConversation
          ? props.getActiveConversation[0].sender_id !==
            props.currentUser.profile_id
            ? props.getActiveConversation[0].sender_id
            : props.getActiveConversation[0].profile_id
          : 0,
        value,
        props.currentUser.profile_id
      )
    );
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
    Messages: state.userReducer.Messages,
    currentUser: state.userReducer.currentUser,
    getActiveConversation: state.userReducer.activeConversation,
  };
};
export default connect(mapStateToProps)(ReplyEditor);
