import React from 'react';
import '../../../styles/registration.less';
import 'antd/dist/antd.css';
import { Steps } from 'antd';

const { Step } = Steps;

export default function ParentWelcome() {
  return (
    <div className="reg-content-container">
      {/* add component for progress tracker when created */}
      <Steps current={1}>
        <Step title="Finished" description="Verified email." />
        <Step title="In Progress" description="Start account setup." />
        <Step title="Waiting" description="Complete profile." />
      </Steps>

      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from unleashing your superpowers
        </p>
        <a href="#">CREATE PROFILES</a>
      </div>
    </div>
  );
}
