import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
        console.log(props);
      }
    }
    // eslint-disable-next-line
  }, [dispatch, authState]);

  return (
    <div>
      <h4>Conversations</h4>
      <List
        itemLayout="horizontal"
        dataSource={props.conversations}
        renderItem={item => (
          <List.Item className="message-list-item">
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.inbox_id}</a>}
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
    conversations: state.parentReducer.messages,
  };
};

export default connect(mapStateToProps)(MessageList);
