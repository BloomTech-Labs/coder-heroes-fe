import React from 'react';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';

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
              description="Ant Design, a design language for background applications..."
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default MessageList;
