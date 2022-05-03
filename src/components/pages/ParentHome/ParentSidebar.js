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
  BookFilled,
  MessageFilled,
} from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

const ParentSideBar = props => {
  const { cart, active } = props;
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 55 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H55V7H0V0ZM0 17.5H55V24.5H0V17.5ZM0 35H55V42H0V35Z"
              fill="#595959"
            />
          </svg>
        </div>
        <Menu.Item
          key="coderheroes"
          icon={<ThunderboltFilled fontSize="150px" />}
          className="dashboard-logo"
          style={{ pointerEvents: 'none' }}
        >
          <strong>Coderheroes</strong>
        </Menu.Item>

        <Menu.Item
          key="dashboard"
          className={active === 'dashboard' ? 'ant-menu-item-selected' : ''}
          icon={<HomeFilled fontSize="150px" />}
        >
          <Link to="/parent">Dashboard</Link>
        </Menu.Item>

        <Menu.Item
          key="family"
          className={active === 'family' ? 'ant-menu-item-selected' : ''}
          icon={<HeartFilled fontSize="150px" />}
        >
          <Link to="/family">Family</Link>
        </Menu.Item>

        <Menu.Item
          key="courses"
          className={active === 'courses' ? 'ant-menu-item-selected' : ''}
          icon={<BookFilled fontSize="150px" />}
        >
          <Link to="/parent-booking">Booking</Link>
        </Menu.Item>

        <Menu.Item
          key="calendar"
          className={active === 'calendar' ? 'ant-menu-item-selected' : ''}
          icon={<CalendarFilled fontSize="150px" />}
        >
          <Link to="/parent-calendar">Calendar</Link>
        </Menu.Item>

        <Menu.Item
          key="newsfeed"
          className={active === 'newsfeed' ? 'ant-menu-item-selected' : ''}
          icon={<ReadOutlined />}
        >
          <Link to="/parent-news-feed">News Feed</Link>
        </Menu.Item>

        <Menu.Item
          key="settings"
          className={active === 'settings' ? 'ant-menu-item-selected' : ''}
          icon={<ToolFilled fontSize="150px" />}
        >
          <Link to="/settings">Settings</Link>
        </Menu.Item>

        <Menu.Item
          key="cart"
          className={active === 'cart' ? 'ant-menu-item-selected' : ''}
          icon={<ShoppingCartOutlined fontSize="150px" />}
        >
          <Link to="/cart" className="link">
            Cart <span>({cart.length})</span>
          </Link>
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
