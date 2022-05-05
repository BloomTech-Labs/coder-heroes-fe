import React, { useState, useEffect } from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  ThunderboltFilled,
  HomeOutlined,
  SnippetsOutlined,
  AliwangwangOutlined,
  FormOutlined,
  BankOutlined,
  UserSwitchOutlined,
  LoginOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Drawer, Menu, Layout } from 'antd';
import {
  ProfileIcon,
  HamburgerMenuIcon,
} from '../../pages/LandingInstructor/Icons';
import { NavLink } from 'react-router-dom';

import NavBarLinks from './NavBarLinks';

import { connect } from 'react-redux';

const { SubMenu } = Menu;
const { Header } = Layout;

function NavBar(props) {
  const [visible, setVisible] = useState(false);
  const [bgColor, setBgColor] = useState('#FEAD2A');
  const { role_id } = props.user.currentUser;

  useEffect(() => {
    if (role_id === 5) setBgColor('#9FB222');
    else if (role_id < 5) setBgColor('#21C5B5');
    else setBgColor('#FEAD2A');
  }, [role_id]);

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    window.location.reload();
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header
      style={{
        backgroundColor: bgColor,
        minHeight: '98px',
        lineHeight: '0',
        padding: '0',
      }}
    >
      <nav className="navbar__mainNav">
        <div className="navbar__logo">
          <NavLink to="/">
            <h1 className="navbar__navTitle">
              {
                <ThunderboltFilled
                  style={{
                    color: '#EEEDD9',
                    fontSize: '1.8rem',
                  }}
                />
              }{' '}
              CODERHEROES
            </h1>
          </NavLink>
        </div>
        <NavBarLinks role_id={role_id} />
        <div className="navbar__btns">
          {localStorage.getItem('okta-token-storage') ? (
            <NavLink to="/" onClick={handleLogout}>
              <button className="navbar__btn">LOGOUT</button>
            </NavLink>
          ) : (
            <NavLink to="/">
              <button className="navbar__btn navbar__contact">
                CONTACT US
              </button>
            </NavLink>
          )}
          <NavLink to="/login">
            <button
              className={`navbar__btn navbar__login ${
                localStorage.getItem('okta-token-storage') ? 'navbar__hide' : ''
              }`}
            >
              LOGIN
            </button>
          </NavLink>
          {localStorage.getItem('okta-token-storage') && (
            <NavLink to="/parent/family">
              <div className="navbar__profile">
                <ProfileIcon style={{ color: 'black', fontSize: 25 }} />
              </div>
            </NavLink>
          )}
        </div>
        <div className="navbar__hamburgerMenu">
          <HamburgerMenuIcon style={{ color: 'white' }} onClick={showDrawer} />
          <Drawer
            title="CoderHeroes"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Menu mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              {!localStorage.getItem('okta-token-storage') && (
                <Menu.Item key="3" icon={<LoginOutlined />}>
                  <NavLink to="/login">Login</NavLink>
                </Menu.Item>
              )}
              {localStorage.getItem('okta-token-storage') && (
                <Menu.Item key="99" icon={<ProfileIcon />}>
                  <NavLink to="/dev">My Dashboard</NavLink>
                </Menu.Item>
              )}
              <Menu.Item key="2" icon={<ContactsOutlined />}>
                <NavLink to="/">Contact Us</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<SnippetsOutlined />}>
                <NavLink to="/">Programs</NavLink>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserSwitchOutlined />}>
                <NavLink to="/browse-instructors">Instructors</NavLink>
              </Menu.Item>
              <Menu.Item key="6" icon={<FormOutlined />}>
                <NavLink to="/parent-booking">Booking</NavLink>
              </Menu.Item>
              <Menu.Item key="7" icon={<BankOutlined />}>
                <NavLink to="/">Scholarships</NavLink>
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<AliwangwangOutlined />}
                title="Social Links"
              >
                <Menu.Item key="8" icon={<FacebookOutlined />}>
                  <a
                    href="https://www.facebook.com/coderheroes"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Menu.Item>
                <Menu.Item key="8" icon={<TwitterOutlined />}>
                  <a
                    href="https://twitter.com/coderheroes"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Menu.Item>
                <Menu.Item key="9" icon={<InstagramOutlined />}>
                  <a
                    href="https://www.instagram.com/coderheroes/"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Menu.Item>
                <Menu.Item key="10" icon={<YoutubeOutlined />}>
                  <a
                    href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </Menu.Item>
                <Menu.Item key="11" icon={<LinkedinOutlined />}>
                  <a
                    href="https://www.linkedin.com/company/coderheroes/"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Drawer>
        </div>
      </nav>
    </Header>
  );
}

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps)(NavBar);
