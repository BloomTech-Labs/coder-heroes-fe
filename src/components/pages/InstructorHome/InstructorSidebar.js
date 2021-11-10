import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  ToolOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
  HomeOutlined,
  ExportOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="coderheroes" icon={<ThunderboltOutlined />}>
            Coderheroes
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="courses" icon={<DesktopOutlined />}>
            Courses
          </Menu.Item>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Mail
          </Menu.Item>
          <Menu.Item key="settings" icon={<ToolOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="logout" icon={<ExportOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default InstructorSidebar;
