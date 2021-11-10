import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';

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
  return (
    <Menu defaultSelectedKeys={['dashboard']}>
      <Menu.Item
        key="dashboard"
        icon={<HomeOutlined style={{ color: '#00cab7' }} />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        key="courses"
        icon={<DesktopOutlined style={{ color: '#00cab7' }} />}
      >
        Courses
      </Menu.Item>
      <Menu.Item
        key="mail"
        icon={<MailOutlined style={{ color: '#00cab7' }} />}
      >
        Mail
      </Menu.Item>
      <Menu.Item
        key="settings"
        icon={<ToolOutlined style={{ color: '#00cab7' }} />}
      >
        Settings
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<ExportOutlined style={{ color: '#00cab7' }} />}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
}

export default InstructorSidebar;
