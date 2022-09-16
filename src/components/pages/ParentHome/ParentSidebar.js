import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeFilled,
  CalendarFilled,
  ToolFilled,
  HeartFilled,
  ReadFilled,
  MessageFilled,
} from '@ant-design/icons';
import { FaShoppingCart } from 'react-icons/fa';

//TO-DO: Implement Auth0
const { Sider } = Layout;

const ParentSideBar = props => {
  const { cart, active, user } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { role_id } = props.user.currentUser;

  console.log(`user role is ${role_id}`);

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
      <Menu
        className="parent-dashboard-sidebar"
        defaultselectedkeys={['1']}
        defaultopenkeys={['sub1']}
        style={{
          height: '90%',
          fontSize: '14px',
          fontFamily: 'Montserrat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="dashboard"
          className={active === 'dashboard' ? 'ant-menu-item-selected' : ''}
          icon={<HomeFilled fontSize="150px" />}
        >
          <Link to="/parent">Newsfeed</Link>
        </Menu.Item>

        <Menu.Item
          key="family"
          className={active === 'family' ? 'ant-menu-item-selected' : ''}
          icon={<HeartFilled fontSize="150px" />}
        >
          <Link to="/parent/family">Family</Link>
        </Menu.Item>

        <Menu.Item
          key="messages"
          className={active === 'messages' ? 'ant-menu-item-selected' : ''}
          icon={<MessageFilled fontSize="150px" />}
        >
          <Link to="/parent/messages">Messages</Link>
        </Menu.Item>

        <Menu.Item
          key="calendar"
          className={active === 'calendar' ? 'ant-menu-item-selected' : ''}
          icon={<CalendarFilled fontSize="150px" />}
        >
          <Link to="/parent/calendar">Calendar</Link>
        </Menu.Item>

        <Menu.Item
          key="courses"
          className={active === 'courses' ? 'ant-menu-item-selected' : ''}
          icon={<ReadFilled fontSize="150px" />}
        >
          <Link to="/parent/booking">Courses</Link>
        </Menu.Item>
        {/* THIS IS COMMENTED OUT BECAUSE WE ARE NOT USEING THE CART COMPONENT AS A CART COMPONENT, WE ARE ISTED USING IT AS A CONFIRMATION PAGE FOR SingleCourseBookingComponent.js. I HAVE PURPOSELY LEFT IT HERE SO THAT YOU MAY TEST IT */}
        {/* 
        <Menu.Item
          key="cart"
          className={active === 'cart' ? 'ant-menu-item-selected' : ''}
          icon={<FaShoppingCart fontSize="150px" />}
        >
          <Link to="/parent/cart" className="link">
            Cart <span>({cart.length})</span>
          </Link>
        </Menu.Item> */}

        <Menu.Item
          key="settings"
          className={active === 'settings' ? 'ant-menu-item-selected' : ''}
          icon={<ToolFilled fontSize="150px" />}
        >
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
    user: state.userReducer,
  };
};

export default connect(mapStateToProps)(ParentSideBar);
