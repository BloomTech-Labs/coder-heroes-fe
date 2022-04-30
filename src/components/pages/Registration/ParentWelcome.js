import React from 'react';
import RegistrationProgress from './RegistrationProgress';
import '../../../styles/registration.less';

export default function ParentWelcome() {
  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={0} />
      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from unleashing your superpowers
        </p>
        <a href="/register-2">CREATE PROFILES</a>
      </div>
    </div>
  );
}
