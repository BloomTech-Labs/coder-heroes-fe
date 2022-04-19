import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

const ParentSideBar = props => {
  const { cart } = props;
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
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        className="parent-dashboard-sidebar"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <div
          onClick={onCollapse}
          style={{
            width: '100%',
            height: 'auto',
            margin: '0 0 5px',
            padding: '15px 0px',
            textAlign: 'center',
            backgroundColor: '#e6e6e6',
            cursor: 'pointer',
          }}
        >
          {collapsed ? (
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="right"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          ) : (
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="left"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
            </svg>
          )}
        </div>
        <Menu.Item
          key="coderheroes"
          icon={<ThunderboltFilled fontSize="150px" />}
          className="dashboard-logo"
        >
          Coderheroes
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<HomeFilled fontSize="150px" />}>
          <Link to="/parent">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="courses" icon={<CalendarFilled fontSize="150px" />}>
          <Link to="/parent-booking">Courses</Link>
        </Menu.Item>
        <Menu.Item key="family" icon={<HeartFilled fontSize="150px" />}>
          <Link to="/family">Family</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ReadOutlined />}>
          <Link to="/parent-news-feed">News Feed</Link>
        </Menu.Item>
        <Menu.Item key="setting" icon={<ToolFilled fontSize="150px" />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<ExportOutlined fontSize="150px" />}
          onClick={() => {
            authService.logout();
          }}
        >
          <Link>Logout</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<ShoppingCartOutlined fontSize="150px" />}>
          <Link to="/cart" className="link">
            Cart <span>({cart.length})</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps)(ParentSideBar);
