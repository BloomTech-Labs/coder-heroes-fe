import { Menu } from 'antd';
import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

function InstructorSidebar() {
  return (
    <Menu defaultSelectedKeys={['dashboard']}>
      <Menu.Item
        key="coderheroes"
        icon={<ThunderboltOutlined />}
        className="dashboard-logo"
      >
        Coderheroes
      </Menu.Item>
      <Menu.Item key="dashboard" icon={<HomeOutlined />}>
        <Link to="/instructor"> Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="courses" icon={<DesktopOutlined />}>
        <Link to="/instructor-booking"> Courses</Link>
      </Menu.Item>
    </Menu>
  );
}

export default InstructorSidebar;
