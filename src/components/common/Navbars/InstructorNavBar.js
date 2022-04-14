import React from 'react';
import { ThunderboltFilled } from '@ant-design/icons';
import { Drawer, Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { ProfileIcon } from '../../pages/LandingInstructor/Icons';

const { Header } = Layout;

export default function InstructorNavBar() {
  return (
    <Header
      style={{
        backgroundColor: '#21C5B5',
        minHeight: '98px',
        lineHeight: '0',
        padding: '0',
      }}
    >
      <nav className="InstNavbar__mainNav">
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
          <NavLink className="navbar__navLink" to="/instructor">
            DASHBOARD
          </NavLink>
          <NavLink className="navbar__navLink" to="/instructor-all-classes">
            COURSES
          </NavLink>
          <NavLink className="navbar__navLink" to="/messages">
            MESSAGES
          </NavLink>
          <NavLink className="navbar__navLink" to="/">
            FEEDBACK
          </NavLink>
        </div>
        <div className="navbar__btns">
          <NavLink to="/">
            <button>LOGOUT</button>
          </NavLink>
        </div>
        <div className="navbar__profile">
          <ProfileIcon style={{ color: 'black', fontSize: 25 }} />
          <p>Name Here</p>
        </div>
      </nav>
    </Header>
  );
}
