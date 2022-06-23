import React, { useEffect, useState, useLayoutEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';
import { getCurrentUser } from '../../../../redux/actions/userActions';

const data = [
  {
    title: 'Person 1',
  },
  {
    title: 'Person 2',
  },
];

const MessageList = props => {
  const { authState, oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  const [filteredConversations, setFilteredConversations] = useState([[]]);
  const [currentConversation, setCurrentConversation] = useState('');
  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
    console.log(filteredConversations);
  }, []);
  useLayoutEffect(() => {
    console.log(props.Messages);
    let hash = {};
    setFilteredConversations(
      props.Messages.filter(
        conversation => conversation.profile_id === props.currentUser.profile_id
      )
        .sort((a, b) => {
          const dateA = new Date(a.sent_at);
          const dateB = new Date(b.sent_at);
          console.log(props.currentUser.profile_id);
          return dateB - dateA;
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
    <div>
      <h4>Conversations</h4>
      <List
        itemLayout="horizontal"
        dataSource={filteredConversations}
        renderItem={item => (
          <List.Item
            className={
              currentConversation == item.sender_id
                ? 'message-list-item active-conversation'
                : 'message-list-item'
            }
            onClick={() => {
              setCurrentConversation(item.sender_id);
              console.log(currentConversation);
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.sender_id}</a>}
              description={item.message}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Messages: state.userReducer.Messages,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(MessageList);
