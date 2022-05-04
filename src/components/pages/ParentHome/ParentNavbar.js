import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  ClockCircleOutlined,
  GiftOutlined,
  UnorderedListOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

const ParentNavbar = props => {
  const [collapsed, setCollapsed] = useState(false);
  const { authService } = useOktaAuth();
  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <Menu
      className="parent-navbar"
      defaultSelectedKeys={['2']}
      defaultOpenKeys={['sub1']}
      style={{ height: '8vh' }}
      mode="inline"
      theme="light"
      color="orange"
      inlineCollapsed={collapsed}
    >
      <Menu.Item key="progress" icon={<ClockCircleOutlined fontSize="150px" />}>
        <Link to="/parent-progress">Progress</Link>
      </Menu.Item>
      <Menu.Item key="achievements" icon={<GiftOutlined fontSize="150px" />}>
        <Link to="/achievements">Achievements</Link>
      </Menu.Item>
      <Menu.Item key="tasks" icon={<UnorderedListOutlined fontSize="150px" />}>
        <Link to="/tasks">Tasks</Link>
      </Menu.Item>
      <Menu.Item
        key="resources"
        icon={<FundProjectionScreenOutlined fontSize="150px" />}
      >
        <Link to="/resources">Resources</Link>
      </Menu.Item>
    </Menu>
  );
};

export default ParentNavbar;
