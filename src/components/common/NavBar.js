import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  ThunderboltFilled,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <nav className="mainNav">
      <div className="nav navLogo">
        <NavLink to="/">
          <h1 className="navTitle">
            {
              <ThunderboltFilled
                style={{ color: '#EEEDD9', fontSize: '2rem' }}
              />
            }{' '}
            CODERHEROES
          </h1>
        </NavLink>
      </div>
      <div className="nav navOptions">
        <NavLink className="navLinks" to="/">
          PROGRAMS
        </NavLink>
        <NavLink className="navLinks" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navLinks" to="/parent-booking">
          BOOKING
        </NavLink>
        <NavLink className="navLinks" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
      <div className="nav navSocial">
        <a
          href="https://www.facebook.com/coderheroes."
          className="socialIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://twitter.com/coderheroes."
          className="socialIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterOutlined />
        </a>
        <a
          href="https://www.instagram.com/coderheroes/."
          className="socialIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg."
          className="socialIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeOutlined />
        </a>
        <a
          href="https://www.linkedin.com/company/coderheroes/."
          className="socialIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </a>
      </div>
      <div className="navButtons">
        <div className="nav navContact">
          <NavLink to="/">
            <button>CONTACT US</button>
          </NavLink>
        </div>
        <div
          className={`nav navSignup ${
            localStorage.getItem('okta-token-storage') ? 'navSignup__hide' : ''
          }`}
        >
          <NavLink to="/login">
            <button>LOGIN</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
