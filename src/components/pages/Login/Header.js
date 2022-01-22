import '../../../styles/header.less';

import React from 'react';
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
  LinkedinFilled,
  ThunderboltOutlined,
} from '@ant-design/icons';

function Header() {
  const onChange = e => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="title-logo">
        <ThunderboltOutlined />
        <h1>CODERHEROES</h1>
      </div>
      <div className="option-list">
        <div className="option">
          <h3>PROGRAMS</h3>
        </div>
        <div className="option">
          <h3>INSTRUCTORS</h3>
        </div>
        <div className="option">
          <h3>BOOKING</h3>
        </div>
        <div className="option">
          <h3>SCHOLARSHIPS</h3>
        </div>
      </div>

      <div className="right-three">
        <div className="social-media-list">
          <div className="social-media">
            <FacebookFilled />
          </div>
          <div className="social-media">
            <TwitterOutlined />
          </div>
          <div className="social-media">
            <InstagramOutlined />
          </div>
          <div className="social-media">
            <YoutubeFilled />
          </div>
          <div className="social-media">
            <LinkedinFilled />
          </div>
        </div>

        <form onSubmit={onChange}>
          <button className="contact"> CONTACT US</button>
        </form>
        <div className="profile-pic">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" />
        </div>
      </div>
    </header>
  );
}

export default Header;
