import React, { useState } from 'react';
import { Menu, Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  TeamOutlined,
  HomeOutlined,
  CalendarOutlined,
  MailOutlined,
  SettingOutlined,
  ThunderboltFilled,
} from '@ant-design/icons';
//const { SubMenu } = Menu; if submenu is needed in the sidebar

const { Sider } = Layout;

function ParentSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(collapsed ? false :true)

  const handleClick = e => {
    console.log('click ', e);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <div>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button> */}
      <Layout style={{ width: '100%' }}>
        <Sider
          style={{ position: 'fixed' }}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ThunderboltFilled
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '5rem',
                padding: '25px 0px',
              }}
            />
          </div>
          <Menu
            onClick={handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100vh' }}
            mode="inline"
            theme="dark"
            disabledOverflow={true}
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
        </Sider>
      </Layout>
    </div>
  );
}
export default ParentSidebar;
