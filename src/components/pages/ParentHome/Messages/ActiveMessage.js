import React, { useEffect, useState, useLayoutEffect } from 'react';
import ReplyEditor from './ReplyEditor';
import { Comment, Tooltip, List } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/index.less';
import '../../../../styles/ParentStyles/messages.less';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import { getCurrentUser } from '../../../../redux/actions/userActions';

function ActiveMessage(props) {
  console.log('props in activeMessage', props);
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const [filteredConversations, setFilteredConversations] = useState([[]]);

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
    console.log(filteredConversations);
  }, []);

  useLayoutEffect(() => {
    console.log(props);
    setFilteredConversations(
      props.Messages.filter(
        conversation => conversation.profile_id === props.currentUser.profile_id
      )
    );
    // eslint-disable-next-line
  }, [props.Messages, props.currentUser.profile_id]);

  useLayoutEffect(() => {
    let hash = {};
    setFilteredConversations(
      props.Messages.filter(
        conversation =>
          conversation.profile_id === props.currentUser.profile_id ||
          conversation.sender_id === props.currentUser.profile_id
      )
        .sort((a, b) => {
          const dateA = new Date(a.sent_at);
          const dateB = new Date(b.sent_at);
          console.log(props.currentUser.profile_id);
          return dateA - dateB;
        })
        .filter(conversation => {
          if (!hash[conversation.sender_id]) {
            hash[conversation.sender_id] = true;
            return true;
          }
          return false;
        })
    );
  }, [props.Messages, props.currentUser.profile_id]);

  return (
    <div className="active-message">
      <h4>{filteredConversations[0]?.title}</h4>
      <List
        className="message-thread"
        header={`${filteredConversations.length} replies`}
        itemLayout="horizontal"
        dataSource={filteredConversations}
        renderItem={(item, i) => (
          <li key={i}>
            <Comment
              actions={filteredConversations[0].actions}
              author={item.sender_id}
              avatar="https://joeschmoe.io/api/v1/random"
              content={item.message}
              datetime={item.sent_at}
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
  };
};

export default connect(mapStateToProps)(ActiveMessage);
