import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined } from '@ant-design/icons';

function ChildrenList(props) {
  const { Meta } = Card;
  const { children } = props;

  return (
    <Card style={{ width: 300 }} actions={[<EditOutlined key="edit" />]}>
      <Meta
        title={children.children[0].username}
        description={`age: ${children.children[0].age}`}
      />
    </Card>
  );
}
export default ChildrenList;
