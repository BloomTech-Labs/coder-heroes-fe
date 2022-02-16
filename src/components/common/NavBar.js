import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

export default function MainNav() {
  return (
    <nav className="mainNav">
      <div className="nav navLogo">
        <h1 className="navTitle">CODERHEROES</h1>
      </div>
      <div className="nav navOptions">
        <a className="navLinks" href="/landing">
          PROGRAMS
        </a>
        <a className="navLinks" href="/landing">
          INSTRUCTORS
        </a>
        <a className="navLinks" href="/landing">
          BOOKING
        </a>
        <a className="navLinks" href="/landing">
          SCHOLARSHIPS
        </a>
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
          <button>LOGIN</button>
        </div>
      </div>
    </nav>
  );
}
