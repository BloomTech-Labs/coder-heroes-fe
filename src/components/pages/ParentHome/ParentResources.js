import React from 'react';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ParentResources = props => {
  return (
    <div>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
        {<MailOutlined />} News Feed
      </h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card title="Mrs. Rodriguez" style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Mrs. Smith" style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Mrs. Lewis" style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </div>
  );
};

export default ParentResources;
