import React from 'react';

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
        <a href="#." className="socialIcon">
          Icon
        </a>
        <a href="#." className="socialIcon">
          Icon
        </a>
        <a href="#." className="socialIcon">
          Icon
        </a>
        <a href="#." className="socialIcon">
          Icon
        </a>
        <a href="#." className="socialIcon">
          Icon
        </a>
      </div>
      <div className="navButtons">
        <div className="nav navContact">
          <button>CONTACT US</button>
        </div>
        <div className="nav navSignup">
          <button>SIGN UP</button>
        </div>
      </div>
    </nav>
  );
}
