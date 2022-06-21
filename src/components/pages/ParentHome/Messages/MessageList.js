import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';
import { getConversations } from '../../../../redux/actions/userActions';

const data = [
  {
    title: 'Person 1',
  },
  {
    title: 'Person 2',
  },
];

const MessageList = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConversations());
    console.log(props);
  }, []);

  return (
    <div>
      <h4>Conversations</h4>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="message-list-item">
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications..."
            />
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    conversations: state.userReducer,
  };
};

export default connect(mapStateToProps)(MessageList);
