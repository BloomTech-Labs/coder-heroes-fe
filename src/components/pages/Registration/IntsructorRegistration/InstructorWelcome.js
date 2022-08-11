import React from 'react';
import '../../../../styles/registration.less';

export default function InstructorWelcome() {
  return (
    <div className="reg-content-container">
      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from sharing your superpowers with future
          CoderHeroes
        </p>
        <a href="/instructor-register-2">CREATE INSTRUCTOR ACCOUNT</a>
      </div>
    </div>
  );
}
