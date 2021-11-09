import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

//const { SubMenu } = Menu; if submenu is needed in the sidebar

function ParentSidebar() {
  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="1">Overview</Menu.Item>
      <Menu.Item key="2">Progress</Menu.Item>
      <Menu.Item key="3">Achievements</Menu.Item>
      <Menu.Item key="4">Student's Tasks</Menu.Item>
      <Menu.Item key="5">Resources</Menu.Item>
      <Menu.Item key="6">Messaging</Menu.Item>
      <Menu.Item key="7">Booking</Menu.Item>
    </Menu>
  );
}
export default ParentSidebar;
