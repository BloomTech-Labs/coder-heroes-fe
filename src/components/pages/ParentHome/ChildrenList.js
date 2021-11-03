import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined } from '@ant-design/icons';

function ChildrenList(props) {
  const { Meta } = Card;
  const { children } = props;

  return (
    <div>
      {children.children.map(child => (
        <Card style={{ width: 300 }} actions={[<EditOutlined key="edit" />]}>
          <Meta title={child.username} description={`Age: ${child.age}`} />
        </Card>
      ))}
    </div>
  );
}
export default ChildrenList;
