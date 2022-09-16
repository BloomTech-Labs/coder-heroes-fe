import React from 'react';
import RegistrationProgress from './RegistrationProgress';
import '../../../styles/registration.less';
//TO DO: Lines 16 + 17 need to be a component Link from react router

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
          <a href="/register-2">CREATE PARENT PROFILE</a>
          <a href="/instructor-register-1">BECOME AN INSTRUCTOR</a>
        </div>
      </div>
    </div>
  );
}
