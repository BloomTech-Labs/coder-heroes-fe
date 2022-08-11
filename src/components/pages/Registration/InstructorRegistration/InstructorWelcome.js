import React from 'react';
import '../../../../styles/registration.less';
import RegistrationProgress from '../RegistrationProgress';

export default function InstructorWelcome() {
  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={1} />
      <div className="content">
        <p className="color-one">Help Teach CoderHeroes!</p>
        <p className="color-two">
          You are steps away from sharing your superpowers with future
          CoderHeroes
        </p>
        <a href="/instructor-register-2">CREATE ACCOUNT</a>
      </div>
    </div>
  );
}
