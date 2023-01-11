import React from 'react';
import logo from '../../../img/coderheroes-logo.svg';
import Button from '../../common/Button';
import '../../../styles/LandingPageStyles/index.less';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
//TO-DO: Implement Auth0

const { Title, Paragraph } = Typography;

function RenderLandingPage() {
  return (
    <div className="landing-container">
      {/* Main text container */}
      <div className="landing-main-container">
        <div className="cloudbg">
          <img
            className="coder-heroes"
            src={logo}
            alt="CoderHeroes Text in Turquoise"
          />
          <div className="landing-main-text">
            <Title className="landing-main-text landing-main-title" level={2}>
              Coding is a Superpower!
            </Title>
            <Paragraph className="landing-main-text">
              Through a love of teaching and technology, <br />
              we empower youth to change the world with their ideas.
            </Paragraph>
          </div>

          {/* Button container */}
          <div className="landing-button-container">
            <NavLink to="/browse-programs">
              <Button
                classType="browse-btn btn"
                buttonText="Browse Programs"
                onClick={''}
              ></Button>
            </NavLink>
            <NavLink to="/register">
              <Button
                classType="create-account-btn btn"
                buttonText="Create Account"
                onClick={''}
              ></Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
