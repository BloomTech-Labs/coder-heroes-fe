import React, { useState, useEffect } from 'react';
import { Layout, Col, Row, Card, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import '../../../../styles/ParentStyles/messages.less';
import '../../../../styles/ParentStyles/index.less';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { getCurrentUser } from '../../../../redux/actions/userActions';

function ParentMessages(props) {
  console.log('props: ', props);
  const { authState, authService } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();

  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [talkingWith, setTalkingWith] = useState([]);
  const [currentMessages, setCurrentMessages] = useState([]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  useEffect(async () => {
    console.log('Props before dispatch: ', props);
    await props.dispatch(getCurrentUser(idToken, authState, authService));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/conversation/myConvos/${props.user.profile_id}`
      )
      .then(resp => {
        setConversations(resp.data);
        let convos = resp.data;

        let count = 0;
        let fetchTalkingWith = convos.map(convo => {
          return { label: convo.conversation_with, key: `${count++}` };
        });

        setTalkingWith(fetchTalkingWith);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.user]);

  const handleClick = e => {
    const index = parseInt(e.key);
    console.log('typeof index: ', typeof index);
    console.log(conversations[index]);
    setCurrentMessages(conversations[index].messages);
  };

  return (
    <Layout className=".page-container">
      <ParentSidebar />

      <Content className="messages-container">
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <h1>Conversations</h1>
            <Menu
              onClick={handleClick}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={conversations.length ? talkingWith : null}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {currentMessages.map(message => {
                return <h2>{message.message}</h2>;
              })}
            </Content>
          </Layout>
        </Layout>
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(ParentMessages);
