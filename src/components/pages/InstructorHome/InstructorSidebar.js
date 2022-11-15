import { Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  PlusOutlined,
  ExportOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

//TO-DO: Implement Auth0
const { Sider } = Layout;

function InstructorSidebar() {
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
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        {/* need to add the route to instructor dashboard but instructor-dashboard is psuedo code for now */}
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="/instructor">Overview</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<ReadOutlined />}>
          <Link to="/instructor-all-classes">Courses</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<ReadOutlined />}>
          <Link to="/classroom">Course</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<PlusOutlined />}>
          <Link to="/messages">Messages</Link>
        </Menu.Item>

        <Menu.Item
          key="logout"
          onClick={() => {
            // authService.logout();
          }}
          icon={<ExportOutlined fontSize="150px" />}
        >
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default InstructorSidebar;
