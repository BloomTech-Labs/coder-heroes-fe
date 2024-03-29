import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../styles/AdminStyles/index.less';
import {
  DashboardOutlined,
  TableOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

const { Sider } = Layout;

function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  let { location } = useHistory();
  const path = location.pathname;

  const onCollapse = () => {
    setCollapsed(!collapsed);
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
      <Menu theme="light" defaultSelectedKeys={[path]} mode="inline">
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.SubMenu title={'Manage'} icon={<TableOutlined />}>
          <Menu.Item key="/admin-instructors">
            <Link to="/admin-instructors">Instructors</Link>
          </Menu.Item>
          
          <Menu.Item key="4">
            <Link to="/admin-courses">Programs</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="5" icon={<ProfileOutlined />}>
          <Link to="/messages">Messages</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AdminSidebar;
