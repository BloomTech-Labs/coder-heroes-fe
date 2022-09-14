import { Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import {
  DesktopOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  //PlusOutlined,
  BellOutlined,
  CalculatorOutlined,
  FormOutlined,
  DollarOutlined,
  //FormOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

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
          <a href="/admin">Home</a>
        </Menu.Item>

        <Menu.Item key="3" icon={<CalculatorOutlined />}>
          <a href="!#">Instructors</a>
        </Menu.Item>

        <Menu.Item key="4" icon={<DesktopOutlined />}>
          <a href="/admin-courses">Courses</a>
        </Menu.Item>

        <Menu.Item key="5" icon={<PlusOutlined />}>
          <a href="/admin-add-course">Add Courses</a>
        </Menu.Item>

        <Menu.Item key="6" icon={<FormOutlined />}>
          <a href="/admin-add-course">Edit Programs</a>
        </Menu.Item>

        <Menu.Item key="7" icon={<DollarOutlined />}>
          <a href="/admin-purchases">Purchases</a>
        </Menu.Item>

        <Menu.Item key="8">
          <a href="/admin-instructors">Instructors</a>
        </Menu.Item>

        <Menu.Item key="9" icon={<DesktopOutlined />}>
          <a href="/admin-edit-instructor">Instructors</a>
        </Menu.Item>

        <Menu.Item key="10" icon={<FolderOpenOutlined />}>
          <a href="/admin-applications">Applications</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AdminSidebar;
