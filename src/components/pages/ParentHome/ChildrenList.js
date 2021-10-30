import React from 'react';
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

function ChildrenList() {
  const { Meta } = Card;

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
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Child's Name"
        description="This is the description"
      />
    </Card>
  );
}
export default ChildrenList;
