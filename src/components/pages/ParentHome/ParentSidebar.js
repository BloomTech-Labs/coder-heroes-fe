import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  TeamOutlined,
  HomeOutlined,
  CalendarOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

function ParentSidebar(props) {
  const { collapsed } = props;
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <div>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100vh' }}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          Family
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarOutlined />}>
          Schedule
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          Inbox
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default ParentSidebar;
