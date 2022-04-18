import React from 'react';
//import registration.less when merged with kayla's PR

export default function InstructorWelcome() {
  return (
    <div className="content-container">
      {/* add component for progress tracker when created */}
      <div className="content">
        <h2 className="color-one">Welcome to CoderHeroes!</h2>
        <p className="color-two">
          You are steps away from sharing your superpowers with future
          CoderHeroes
        </p>
        <a href="#">CREATE ACCOUNT</a>
      </div>
    </div>
  );
}
