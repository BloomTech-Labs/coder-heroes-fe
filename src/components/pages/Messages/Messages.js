import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import socketIOClient from 'socket.io-client';

const { Content, Sider, Header } = Layout;

const dummyConversations = ['Jim', 'Anna', 'Ray'];
const Messages = props => {
  useEffect(() => {
    // const socket = socketIOClient('localhost:4001');
    const socket = socketIOClient(process.env.REACT_APP_SOCKET_URI);
    socket.on('messagesFeed', data => {
      console.log(data);
    });

    return () => socket.off('messagesFeed');
  }, []);
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
