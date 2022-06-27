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
  const [activeSenderId, setActiveSenderId] = useState(null);

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeSenderId) {
      const currentConversation = filteredConversations.filter(
        conversation =>
          conversation[0].sender_id === activeSenderId ||
          conversation[0].profile_id === activeSenderId
      )[0];
      dispatch(getActiveConversation(currentConversation));
    }
  }, [activeSenderId, dispatch, filteredConversations, props.Messages]);

  useLayoutEffect(() => {
    const idMap = {};
    const allConversations = [];
    const sortedMessagesById =
      //Right now this is manually filtering all messages by profile_id, once backend is built instead send a dispatch to get
      //all messages by profileId in the useEffect and replace this filter
      props.Messages.filter(
        message =>
          message.sender_id === currentUser.profile_id ||
          message.profile_id === currentUser.profile_id
      ).sort((a, b) => {
        let profileA = 0;
        if (a.sender_id === currentUser.profile_id) {
          profileA = a.sender_id;
        } else {
          profileA = a.profile_id;
        }
        let profileB = 0;
        if (b.sender_id === currentUser.profile_id) {
          profileB = b.sender_id;
        } else {
          profileB = b.profile_id;
        }
        return profileA - profileB;
      });

    sortedMessagesById.forEach(message => {
      const sender =
        message.sender_id !== currentUser.profile_id
          ? message.sender_id
          : message.profile_id;
      if (idMap[sender]) {
        idMap[sender].push(message);
      } else {
        idMap[sender] = [message];
      }
    });

    for (let key in idMap) {
      allConversations.push(idMap[key]);
    }

    setFilteredConversations(allConversations);
    if (activeSenderId === null && allConversations.length > 0) {
      setActiveSenderId(allConversations[0][0].sender_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.Messages, props.currentUser.profile_id, dispatch]);

  const getLastOnly = arr => {
    let newArr = [];
    if (arr.length > 0) {
      newArr = arr.sort((a, b) => {
        const dateA = new Date(a.sent_at);
        const dateB = new Date(b.sent_at);
        return dateA - dateB;
      });
    }
    if (newArr.length > 0) {
      return newArr[0];
    } else {
      return null;
    }
  };

  const handleClick = sender_id => {
    const currentConversation = filteredConversations.filter(
      conversation =>
        conversation[0].sender_id === sender_id ||
        conversation[0].profile_id === sender_id
    )[0];
    dispatch(getActiveConversation(currentConversation));
    setCurrentConversation(currentConversation);
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
    <div>
      <h4>Conversations</h4>
      <List
        itemLayout="horizontal"
        dataSource={filteredConversations}
        renderItem={item => (
          <List.Item
            className={
              currentConversation[0]?.sender_id === getLastOnly(item)?.sender_id
                ? 'message-list-item active-conversation'
                : 'message-list-item'
            }
            onClick={() => {
              setActiveSenderId(getLastOnly(item).sender_id);
              handleClick(
                getLastOnly(item)?.sender_id === currentUser.profile_id
                  ? getLastOnly(item)?.profile_id
                  : getLastOnly(item)?.sender_id
              );
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <div className="conversation-partner">
                  {getLastOnly(item)?.sender_id === currentUser.profile_id
                    ? 'Message With: ' + getLastOnly(item)?.profile_id
                    : 'Message With: ' + getLastOnly(item)?.sender_id}
                </div>
              }
              description={`${item && countReplies(item)} unread`}
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
