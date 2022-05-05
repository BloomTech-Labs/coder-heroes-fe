import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/index.less';

function ActiveMessage() {
  const { Content } = Layout;

  return (
    <Content>
      <h1>Messaging Interface</h1>
    </Content>
  );
}

export default ActiveMessage;
