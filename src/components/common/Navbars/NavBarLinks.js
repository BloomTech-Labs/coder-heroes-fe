import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarLinks(props) {
  const { role_id } = props;

  if (role_id === 1 || role_id === 2) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/">
          DASHBOARD
        </NavLink>
        <NavLink className="navbar__navLink" to="/admin-courses">
          COMPONENTS
        </NavLink>
        <NavLink className="navbar__navLink" to="/admin-add-course">
          UTILITIES
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          PAGES
        </NavLink>
      </div>
    );
  } else if (role_id === 3) {
    return (
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
        <NavLink className="navbar__navLink last_navLink" to="/">
          FEEDBACK
        </NavLink>
      </div>
    );
  } else if (role_id === 4) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/browse-programs">
          PROGRAMS
        </NavLink>
        <NavLink className="navbar__navLink" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navbar__navLink" to="/parent-booking">
          BOOKING
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
    );
  } else if (role_id === 5) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/">
          DASHBOARD
        </NavLink>
        <NavLink className="navbar__navLink" to="/">
          RESOURCES
        </NavLink>
        <NavLink className="navbar__navLink" to="/">
          PROGRESS
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          ACHIEVEMENTS
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/browse-programs">
          PROGRAMS
        </NavLink>
        <NavLink className="navbar__navLink" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navbar__navLink" to="/parent/booking">
          BOOKING
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
    );
  }
}
