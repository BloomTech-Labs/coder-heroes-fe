import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  DashboardOutlined,
  CheckCircleOutlined,
  MessageOutlined,
  GroupOutlined,
  StarOutlined,
  SlidersOutlined,
  ExportOutlined,
  ReadOutlined,
} from '@ant-design/icons';

//TO-DO: Implement Auth0
const { Sider } = Layout;

const StudentSideBar = props => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <Sider
      data-testid="sider"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        className="parent-dashboard-sidebar"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined fontSize="150px" />}
        >
          <Link to="/student">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="my-tasks"
          icon={<CheckCircleOutlined fontSize="150px" />}
        >
          <Link to="/student-tasks">My Tasks</Link>
        </Menu.Item>
        <Menu.Item key="messages" icon={<MessageOutlined fontSize="150px" />}>
          <Link to="/student-messages">Messages</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<ReadOutlined fontSize="150px" />}>
          <Link to="/student-resources">Resources</Link>
        </Menu.Item>
        <Menu.Item key="portfolio" icon={<GroupOutlined fontSize="150px" />}>
          <Link to="/student-portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="progress" icon={<SlidersOutlined fontSize="150px" />}>
          <Link to="/student-progress">Progress</Link>
        </Menu.Item>
        <Menu.Item key="achievements" icon={<StarOutlined fontSize="150px" />}>
          <Link to="/student-achievements">Achievements</Link>
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<ExportOutlined fontSize="150px" />}
          onClick={() => {
            // authService.logout();
          }}
        >
          <Link>Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default connect(state => state)(StudentSideBar);
