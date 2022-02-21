import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
    <nav className="mainNav">
      <div className="nav navLogo">
        <Link to="/">
          <h1 className="navTitle">{<ThunderboltOutlined />}CODERHEROES</h1>
        </Link>
      </div>
      <div className="nav navOptions">
        <Link className="navLinks" to="/">
          PROGRAMS
        </Link>
        <Link className="navLinks" to="/instructor">
          INSTRUCTORS
        </Link>
        <Link className="navLinks" to="/parent-booking">
          BOOKING
        </Link>
        <Link className="navLinks" to="/">
          SCHOLARSHIPS
        </Link>
      </div>
      <div className="nav navSocial">
        <a href="https://www.facebook.com/coderheroes." className="socialIcon">
          <FacebookOutlined />
        </a>
        <a href="https://twitter.com/coderheroes." className="socialIcon">
          <TwitterOutlined />
        </a>
        <a
          href="https://www.instagram.com/coderheroes/."
          className="socialIcon"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg."
          className="socialIcon"
        >
          <YoutubeOutlined />
        </a>
        <a
          href="https://www.linkedin.com/company/coderheroes/."
          className="socialIcon"
        >
          <LinkedinOutlined />
        </a>
      </div>
      <div className="navButtons">
        <div className="nav navContact">
          <button>CONTACT US</button>
        </div>
        <div className="nav navSignup">
          <Link to="/login">
            <button>SIGN UP</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
