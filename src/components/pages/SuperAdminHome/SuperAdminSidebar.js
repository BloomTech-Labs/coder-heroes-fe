import { Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import {
  DesktopOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  PlusOutlined,
  BellOutlined,
  CalculatorOutlined,
  UserOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function AdminSidebar() {
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
        <Menu.Item
          key="1"
          icon={<ThunderboltOutlined />}
          className="dashboard-logo"
        >
          Coderheroes
        </Menu.Item>

        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="#">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<BellOutlined />}>
          <Link to="#">Notifications</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<CalculatorOutlined />}>
          <Link to="#">Analytics</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="#">Manage Users</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<DesktopOutlined />}>
          <Link to="#">Courses</Link>
        </Menu.Item>

        <Menu.Item key="7" icon={<PlusOutlined />}>
          <Link to="#">Add Courses</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<DollarOutlined />}>
          <a href="/admin-purchases">Purchases</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AdminSidebar;
