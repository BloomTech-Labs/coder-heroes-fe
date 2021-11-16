import { Menu } from 'antd';
import React from 'react';
import '../../../styles/InstructorStyles/index.less';

import {
  DesktopOutlined,
  ToolOutlined,
  MailOutlined,
  HomeOutlined,
  ExportOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

function InstructorSidebar() {
  return (
    <Menu defaultSelectedKeys={['coderheroes']}>
      <Menu.Item
        key="coderheroes"
        icon={<ThunderboltOutlined />}
        className="dashboard-logo"
      >
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
  );
}

export default InstructorSidebar;
