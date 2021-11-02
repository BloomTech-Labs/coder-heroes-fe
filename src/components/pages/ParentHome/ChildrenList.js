import React from 'react';
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

function ChildrenList(props) {
  const { Meta } = Card;
  const { children } = props;

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={children.children[0].avatar} />}
        title={children.children[0].username}
        description={`age: ${children.children[0].age}`}
      />
    </Card>
  );
}
export default ChildrenList;
