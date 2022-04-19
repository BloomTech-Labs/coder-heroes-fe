import React from 'react';
import { Steps } from 'antd';

export default function RegistrationProgress(props) {
  const { step_num } = props;
  const { Step } = Steps;

  return (
    <Steps current={step_num} className="reg-progress">
      <Step />
      <Step title="" />
      <Step title="" description="" />
      <Step title="" description="" />
    </Steps>
  );
}
