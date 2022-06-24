import React, { useEffect, useState, useLayoutEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';
import { getCurrentUser } from '../../../../redux/actions/userActions';
import { getActiveConversation } from '../../../../redux/actions/userActions';

const MessageList = props => {
  const currentUser = props.currentUser;
  const { authState, oktaAuth } = useOktaAuth();
  const dispatch = useDispatch();
  const [filteredConversations, setFilteredConversations] = useState([[]]);
  const [currentConversation, setCurrentConversation] = useState('');
  const [activeSenderId, setActiveSenderId] = useState('1');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
    console.log(filteredConversations);
  }, []);

  useEffect(() => {
    const currentConversation = filteredConversations.filter(
      conversation => conversation.sender_id === activeSenderId
    );
    dispatch(getActiveConversation(currentConversation));
  }, [activeSenderId, dispatch, filteredConversations, props.Messages]);
  useLayoutEffect(() => {
    console.log(props.Messages);

    setFilteredConversations(
      props.Messages.filter(
        conversation =>
          conversation.profile_id === props.currentUser.profile_id ||
          conversation.sender_id === props.currentUser.profile_id
      ).sort((a, b) => {
        const dateA = new Date(a.sent_at);
        const dateB = new Date(b.sent_at);
        console.log(props.currentUser.profile_id);
        return dateB - dateA;
      })
    );
  }, [props.Messages, props.currentUser.profile_id]);
  const getFirstOnly = arr => {
    let hash = {};
    return arr.filter(conversation => {
      if (!hash[conversation.sender_id]) {
        hash[conversation.sender_id] = true;
        return true;
      }
      return false;
    });
  };

  const handleClick = async sender_id => {
    console.log(loading);
    const currentConversation = filteredConversations.filter(
      conversation => conversation.sender_id === sender_id
    );
    await dispatch(getActiveConversation(currentConversation));
    await setCurrentConversation(currentConversation);
    console.log(props);
  };

  return (
    <div>
      <h4>Conversations</h4>
      <List
        itemLayout="horizontal"
        dataSource={getFirstOnly(filteredConversations)}
        renderItem={item => (
          <List.Item
            className={
              currentConversation[0]?.sender_id === item.sender_id
                ? 'message-list-item active-conversation'
                : 'message-list-item'
            }
            onClick={() => {
              setActiveSenderId(item.sender_id);
              handleClick(item.sender_id);
              console.log('current conversation', currentConversation);
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <div className="conversation-partner">
                  {item.sender_id === currentUser.profile_id
                    ? 'sent to: ' + item.profile_id
                    : 'sent by: ' + item.sender_id}
                </div>
              }
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
    activeConversation: state.userReducer.activeConversation,
  };
};

export default connect(mapStateToProps)(MessageList);
