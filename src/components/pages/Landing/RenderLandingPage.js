import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '../../common/Button';

function RenderLandingPage(props) {
  return (
    <div className="landing-container">
      {/* <h1>Welcome to Labs Basic SPA</h1> */}
      {/* <div> */}
      {/* <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p> */}

      {/* Main text container */}
      <div className="landing-main-container">
        <div className="landing-main-text">
          <h1>Coding is a superpower.</h1>
          <h3>
            {' '}
            Through a love of teaching and technology, we empower youth to
            change the world with their ideas.{' '}
          </h3>
        </div>

        {/* Button container */}
        <div className="landing-button-container">
          <Button
            classType="browse-btn btn"
            buttonText="BROWSE PROGRAMS"
            onClick={''}
          ></Button>
          <Button
            classType="support-us-btn btn"
            buttonText="SUPPORT US"
            onClick={''}
          ></Button>
        </div>
        <h3>
          {' '}
          We choose to navigate to Covid-19 landscape with innovation, and
          launched the first-ever coding program for kids with a
          BUY-ONE-GIVE-ONE CHARITABLE MODEL{' '}
        </h3>
        <h1>BUY-ONE-GIVE-ONE CHARITABLE MODEL </h1>
      </div>

      <div className="landing-second-container">
        <div className="landing-second-container-img">
          <img
            src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="coding"
          />
        </div>
        <div className="landing-second-container-content">
          <div className="landing-second-container-text">
            <h3>GIVE BACK TO THE COMMUNITY.</h3>
            <h1>Support Code Your Dreams</h1>
            <p>
              All CoderHeroes proceeds provide direct funding to our original
              mission, centered in incubating tech skills within underserved
              school districts.
            </p>
          </div>
          <Button
            classType="landing-second-container-btn"
            buttonText="VISIT WEBSITE"
          ></Button>
        </div>
      </div>
      <p></p>
    </div>
  );
}
export default RenderLandingPage;
