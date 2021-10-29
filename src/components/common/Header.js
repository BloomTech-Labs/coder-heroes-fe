import React from 'react';
import { Menu } from 'antd';

export default function MainHeader({ props }) {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Programs</Menu.Item>
        <Menu.Item key="2">Instructors</Menu.Item>
        <Menu.Item key="3">Booking</Menu.Item>
        <Menu.Item key="3">Scholarships</Menu.Item>
        <Menu.Item key="3">Contact Us (button)</Menu.Item>
      </Menu>
    </div>
  );
}
