import React from 'react';
//import registration.less when merged with kayla's PR

export default function ParentWelcome() {
  return (
    <div className="content-container">
      {/* add component for progress tracker when created */}
      <div className="content">
        <h2 className="color-one">Welcome to CoderHeroes!</h2>
        <p className="color-two">
          You are steps away from unleashing your superpowers
        </p>
        <a href="#">CREATE PROFILES</a>
      </div>
    </div>
  );
}
