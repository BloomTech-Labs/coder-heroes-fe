import React from 'react';
import { Layout, Menu } from 'antd';

const { Content, Sider, Header } = Layout;

const dummyConversations = ['Jim', 'Anna', 'Ray'];
const Messages = props => {
  return (
    <Layout>
      <Sider>
        <Header>Conversations</Header>
        <Menu style={{ width: 256 }} mode="inline">
          {dummyConversations.map(conversation => {
            return <Menu.Item>{conversation}</Menu.Item>;
          })}
        </Menu>
      </Sider>
      <Layout>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default Messages;
