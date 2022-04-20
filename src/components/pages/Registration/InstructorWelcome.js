import React from 'react';
//import registration.less when merged with kayla's PR

export default function InstructorWelcome() {
  return (
    <div className="reg-content-container">
      {/* add component for progress tracker when created */}
      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from sharing your superpowers with future
          CoderHeroes
        </p>
        <a href="#">CREATE ACCOUNT</a>
      </div>
    </div>
  );
}
