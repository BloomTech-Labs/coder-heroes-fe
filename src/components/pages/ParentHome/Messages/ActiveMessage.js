import React, { useEffect, useState, useLayoutEffect } from 'react';
import ReplyEditor from './ReplyEditor';
import { Comment, Tooltip, List } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/index.less';
import '../../../../styles/ParentStyles/messages.less';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import { getCurrentUser } from '../../../../redux/actions/userActions';
import { getActiveConversation } from '../../../../redux/actions/userActions';

function ActiveMessage(props) {
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
  }, []);
  const sortByDate = arr => {
    return arr.sort((a, b) => {
      const dateA = new Date(a.sent_at);
      const dateB = new Date(b.sent_at);
      return dateA - dateB;
    });
  };
  const getTime = time => {
    const date = new Date(time);
    return (
      'Date: ' +
      date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      String(date.getMinutes()).padStart(2, '0') +
      ':' +
      String(date.getSeconds()).padStart(2, '0')
    );
  };
  const countReplies = arr => {
    let count = 0;
    arr.forEach(message => {
      if (
        message.read === false &&
        message.sender_id !== props.currentUser.profile_id
      ) {
        count++;
      }
    });
    return count;
  };
  return (
    <div className="active-message">
      <h4>
        {props.activeConversation[0] && props.activeConversation[0].title}
      </h4>
      <List
        className="message-thread"
        header={`${props.activeConversation &&
          countReplies(props.activeConversation)} unread`}
        itemLayout="horizontal"
        dataSource={
          props.activeConversation ? sortByDate(props.activeConversation) : []
        }
        renderItem={(item, i) => (
          <li key={i}>
            <Comment
              actions={
                props.activeConversation[0] &&
                props.activeConversation[0].actions
              }
              author={item.sender_id}
              avatar="https://joeschmoe.io/api/v1/random"
              content={item.message}
              datetime={getTime(item.sent_at)}
            />
          </li>
        )}
      />
      <ReplyEditor />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Messages: state.userReducer.Messages,
    currentUser: state.userReducer.currentUser,
    activeConversation: state.userReducer.activeConversation,
  };
};

export default connect(mapStateToProps)(ActiveMessage);
