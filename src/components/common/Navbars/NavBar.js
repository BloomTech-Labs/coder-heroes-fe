import React, { useState, useEffect } from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  HomeOutlined,
  AliwangwangOutlined,
  LoginOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Drawer, Menu, Layout } from 'antd';
// import LogoutPage from '../../pages/Login/LogoutContainer';
import {
  ProfileIcon,
  HamburgerMenuIcon,
} from '../../pages/LandingInstructor/Icons';
import { NavLink, useHistory } from 'react-router-dom';

import NavBarLinks from './NavBarLinks';

import { connect } from 'react-redux';

import navLogo from '../../../img/navbar-logo.png';
import handleLogout from '../../../utils/logout.js';

import { useAuth0 } from '@auth0/auth0-react';

const { SubMenu } = Menu;
const { Header } = Layout;

function NavBar(props) {
  const [firstLogin, setFirstLogin] = useState(true);
  const [visible, setVisible] = useState(false);
  const [logoutRender, setLogoutRender] = useState(false);
  const [bgColor, setBgColor] = useState('#21c5b5');
  let { role_id } = props.user.currentUser;
  const history = useHistory();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log("user.name", user.name);

  useEffect(() => {
    if (role_id === 5) setBgColor('#9FB222');
    else if (role_id < 5) setBgColor('#21C5B5');
    else setBgColor('#FEAD2A');
  }, [role_id]);

  useEffect(() => {
    if (role_id <= 5) {
      setLogoutRender(true);
    } else if (role_id === undefined) {
      setLogoutRender(false);
    }
  }, [role_id]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  if (firstLogin && role_id) {
    history.push('/dashboard');
    setFirstLogin(false);
  }

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
            <img className="nav-logo" src={navLogo} alt="logo" />
          </NavLink>
        </div>
        <NavBarLinks role_id={role_id} />
        <div className="navbar__btns">
          {logoutRender ? (
            <NavLink to="/" onClick={handleLogout}>
              <button className="navbar__btn">LOGOUT</button>
            </NavLink>
          ) : (
            <NavLink to="/">
              <button
                onClick={() =>
                  (window.location = 'mailto:brianne@coderheroes.com')
                }
                className="navbar__btn navbar__contact"
              >
                CONTACT US
              </button>
            </NavLink>
          )}
          {isAuthenticated ? (
            <NavLink to="/logout">
              <button className="navbar__btn navbar__login">LOGOUT</button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="navbar__btn navbar__login">LOGIN</button>
            </NavLink>
          )}
          {/* {localStorage.getItem({}) && ( */}
          <NavLink to="/parent/family">
            <div className="navbar__profile">
              {!isAuthenticated ? (
                <ProfileIcon style={{ color: 'black', fontSize: 30 }} />
              ) : (
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{
                    borderRadius: '100px',
                    width: '40px',
                  }}
                />
              )}
            </div>
          </NavLink>
          {/* )} */}
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
              <Menu.Item key="3" icon={<LoginOutlined />}>
                <NavLink to="/login">Login</NavLink>
              </Menu.Item>
              <Menu.Item key="99" icon={<ProfileIcon />}>
                <NavLink to="/dev">My Dashboard</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<ContactsOutlined />}>
                <NavLink
                  to="/"
                  onClick={() =>
                    (window.location = 'mailto:brianne@coderheroes.com')
                  }
                  className="navbar__btn navbar__contact"
                >
                  Contact Us
                </NavLink>
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
