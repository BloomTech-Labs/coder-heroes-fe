import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function MainFooter({ props }) {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
}
