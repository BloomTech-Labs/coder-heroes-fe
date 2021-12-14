import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  DoubleRightOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const ParentSideBar = () => {
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
      <Menu defaultSelectedKeys={['dashboard']}>
        <Menu.Item
          key="coderheroes"
          icon={<ThunderboltFilled fontSize="150px" />}
          className="dashboard-logo"
        >
          Coderheroes
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<HomeFilled fontSize="150px" />}>
          <Link to="/parent">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="courses" icon={<CalendarFilled fontSize="150px" />}>
          <Link to="/parent-booking">Courses</Link>
        </Menu.Item>

        <Menu.Item key="family" icon={<HeartFilled fontSize="150px" />}>
          <Link to="/family">Family</Link>
        </Menu.Item>

        <Menu.Item key="setting" icon={<ToolFilled fontSize="150px" />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>

        <Menu.Item key="logout" icon={<ExportOutlined fontSize="150px" />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ParentSideBar;

// ** means that routes for "settings", "family (which is renders a list of children that belong to that parent. the endpoint might be localhost:3000/parent_id/child or something like that), Logout ( I know the logout functionality is working, I just dont know how to connect to it) are missing. Can we address that or let me know so I can remove.
