import { Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

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
      <Menu defaultSelectedKeys={['dashboard']}>
        <Menu.Item
          key="coderheroes"
          icon={<ThunderboltOutlined />}
          className="dashboard-logo"
        >
          Coderheroes
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          <Link to="/instructor">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="courses" icon={<DesktopOutlined />}>
          <Link to="/instructor-booking">Courses</Link>
        </Menu.Item>

        <Menu.Item key="add_course" icon={<PlusOutlined />}>
          <Link to="/instructor-add-course">Add Courses</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default InstructorSidebar;
