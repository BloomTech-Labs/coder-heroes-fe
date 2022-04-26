import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  ReadOutlined,
} from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

const StudentSideBar = props => {
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
    <Sider
      data-testid="sider"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        className="student-dashboard-sidebar"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="dashboard" icon={<HomeFilled fontSize="150px" />}>
          <Link to="/student">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="my-tasks" icon={<CalendarFilled fontSize="150px" />}>
          <Link to="/parent-booking">My Tasks</Link>
        </Menu.Item>
        <Menu.Item key="messages" icon={<HeartFilled fontSize="150px" />}>
          <Link to="/family">Messages</Link>
        </Menu.Item>
        <Menu.Item key="resources" icon={<ReadOutlined />}>
          <Link to="/parent-news-feed">Resources</Link>
        </Menu.Item>
        <Menu.Item key="portfolio" icon={<ToolFilled fontSize="150px" />}>
          <Link to="/settings">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="achievements" icon={<ToolFilled fontSize="150px" />}>
          <Link to="/settings">Achievements</Link>
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<ExportOutlined fontSize="150px" />}
          onClick={() => {
            authService.logout();
          }}
        >
          <Link>Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default connect(StudentSideBar);
