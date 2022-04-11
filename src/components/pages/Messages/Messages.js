import React from 'react';
import { Layout, Menu } from 'antd';

const { Content, Sider, Header } = Layout;
const Messages = props => {
  return (
    <Layout>
      <Sider>
        <Header>Conversations</Header>
        <Menu style={{ width: 256 }} mode="inline">
          <Menu.Item>Jim</Menu.Item>
          <Menu.Item>Anna</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default Messages;
