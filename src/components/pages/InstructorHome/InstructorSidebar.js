import { Menu } from 'antd';
import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import { Link } from 'react-router-dom';
import {
  // DesktopOutlined,
  HomeOutlined,
  PlusOutlined,
  ExportOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

function InstructorSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { authService } = useOktaAuth();
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
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <a href="/instructor">Overview</a>
        </Menu.Item>

        <Menu.Item key="3" icon={<ReadOutlined />}>
          <a href="/instructor-all-classes">Courses</a>
        </Menu.Item>

        <Menu.Item key="4" icon={<ReadOutlined />}>
          <a href="/classroom">Course</a>
        </Menu.Item>

        <Menu.Item key="5" icon={<PlusOutlined />}>
          <a href="/messages">Messages</a>
        </Menu.Item>

        <Menu.Item
          key="logout"
          onClick={() => {
            authService.logout();
          }}
          icon={<ExportOutlined fontSize="150px" />}
        >
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default InstructorSidebar;
