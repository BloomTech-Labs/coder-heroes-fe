import React, { useState } from 'react';
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
} from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import {
  ProfileIcon,
  HamburgerMenuIcon,
} from '../pages/LandingInstructor/Icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
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
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/">
          PROGRAMS
        </NavLink>
        <NavLink className="navbar__navLink" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navbar__navLink" to="/parent-booking">
          BOOKING
        </NavLink>
        <NavLink className="navbar__navLink" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
      <div className="navbar__socials">
        <div className="navbar__socials__cont">
          <a
            href="https://www.facebook.com/coderheroes."
            className="navbar__socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com/coderheroes."
            className="navbar__socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.instagram.com/coderheroes/."
            className="navbar__socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg."
            className="navbar__socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.linkedin.com/company/coderheroes/."
            className="navbar__socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
      <div className="navbar__btns">
        <NavLink to="/">
          <button className="navbar__btn navbar__contact">CONTACT US</button>
        </NavLink>
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
          <NavLink to="/my-dashboard">
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
            {localStorage.getItem('okta-token-storage') && (
              <Menu.Item key="99" icon={<ProfileIcon />}>
                <NavLink to="/dev">My Dashboard</NavLink>
              </Menu.Item>
            )}
            <Menu.Item key="2" icon={<SnippetsOutlined />}>
              <NavLink to="/">Programs</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserSwitchOutlined />}>
              <NavLink to="/browse-instructors">Instructors</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<FormOutlined />}>
              <NavLink to="/parent-booking">Booking</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<BankOutlined />}>
              <NavLink to="/">Scholarships</NavLink>
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<AliwangwangOutlined />}
              title="Social Links"
            >
              <Menu.Item key="6" icon={<FacebookOutlined />}>
                <a
                  href="https://www.facebook.com/coderheroes."
                  className="navbar__socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </Menu.Item>
              <Menu.Item key="7" icon={<TwitterOutlined />}>
                <a
                  href="https://twitter.com/coderheroes."
                  className="navbar__socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Menu.Item>
              <Menu.Item key="8" icon={<InstagramOutlined />}>
                <a
                  href="https://www.instagram.com/coderheroes/."
                  className="navbar__socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Menu.Item>
              <Menu.Item key="9" icon={<YoutubeOutlined />}>
                <a
                  href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg."
                  className="navbar__socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </Menu.Item>
              <Menu.Item key="10" icon={<LinkedinOutlined />}>
                <a
                  href="https://www.linkedin.com/company/coderheroes/."
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
  );
};

export default Navbar;
