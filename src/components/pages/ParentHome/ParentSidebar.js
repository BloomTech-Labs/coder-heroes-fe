import React, { useState } from 'react';
import { Menu, Drawer, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  MenuOutlined,
} from '@ant-design/icons';

const ParentSideBar = () => {
  // The drawer is invisible by default
  const [isVisible, setIsVisible] = useState(false);

  // trigger this function to open the drawer
  const showDrawer = () => {
    setIsVisible(true);
  };

  // close the drawer
  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <nav style={styles.nav}>
        <Button shape="circle" style={styles.button} onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </nav>

      <Drawer
        className="parent-dashboard-sidebar"
        visible={isVisible}
        onClose={closeDrawer}
        placement="left"
        title="My Drawer"
      >
        <p>Menu Item #1</p>
        <Divider />
        <p>Menu Item #2</p>
        <Divider />
        <p>Menu Item #3</p>
        <Divider />
        <p>Menu Item #4</p>
        <Divider />
        <p>Menu Item #5</p>
        <Divider />
        <p>Menu Item #6</p>
        <Divider />
        <p>Menu Item #7</p>
        {/* <Menu.Item
          key="1"
          className="dashboard-logo"
          icon={<ThunderboltFilled style={{ fontSize: '150%' }} />}
        >
          CoderHeroes
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeFilled style={{ fontSize: '150%' }} />}>
          <Link to="/parent" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<HeartFilled style={{ fontSize: '150%' }} />}>
          <Link to="/" className="link">
            ** Family
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<CalendarFilled style={{ fontSize: '150%' }} />}>
          <Link to="/parent-booking" className="link">
            Booking
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ToolFilled style={{ fontSize: '150%' }} />}>
          <Link to="/settings" className="link">
            ** Settings
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<ExportOutlined style={{ fontSize: '150%' }} />}
        >
          <Link to="/logout" className="link">
            ** Logout
          </Link>
        </Menu.Item> */}
      </Drawer>
    </div>
  );
};

const styles = {
  nav: {
    height: 50,
    background: '#006c72',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'white',
    fontSize: 16,
  },
};

export default ParentSideBar;

// ** means that routes for "settings", "family (which is renders a list of children that belong to that parent. the endpoint might be localhost:3000/parent_id/child or something like that), Logout ( I know the logout functionality is working, I just dont know how to connect to it) are missing. Can we address that or let me know so I can remove.
