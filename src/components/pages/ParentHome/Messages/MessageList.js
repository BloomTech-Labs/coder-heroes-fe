import React from 'react';
import { Layout, List, Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function MessageList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item className="p">
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications..."
          />
        </List.Item>
      )}
    />
  );
}

export default MessageList;
