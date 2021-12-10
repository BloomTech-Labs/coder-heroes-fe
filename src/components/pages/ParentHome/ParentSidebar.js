import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeOutlined,
  ThunderboltFilled,
  ReadOutlined,
} from '@ant-design/icons';

function ParentSidebar(props) {
  const { collapsed } = props;

  return (
    <div>
      <Menu
        className="parent-dashboard-sidebar"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="1"
          className="dashboard-logo"
          icon={<ThunderboltFilled />}
        >
          CoderHeroes
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="/parent" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ReadOutlined />}>
          <Link to="/parent-booking" className="link">
            Booking
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default ParentSidebar;
