import React from 'react';
import RegistrationProgress from './RegistrationProgress';
import '../../../styles/registration.less';

export default function RegisterStep1() {
  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={0} />
      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from unleashing your superpowers
        </p>
        <div className="profile-btns">
          <a href="/register-2">CREATE A PROFILE</a>
          {/* <p className="or">
          Or
        </p> */}
          <a href="/instructor-register-1">BECOME AN INSTRUCTOR</a>
        </div>
      </div>
    </div>
  );
}
