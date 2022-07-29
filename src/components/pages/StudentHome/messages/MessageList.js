import React from 'react';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';

// possible location for styling component below
// import '../../../../styles/StudentStyles/messages.less';
// import '../../../../styles/StudentStyles/index.less';

const data = [
  {
    title: 'Person 1',
  },
  {
    title: 'Person 2',
  },
];

function MessageList() {
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing"
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default MessageList;
