import React from 'react';
import { Progress } from 'antd';

export default function ProgressBar() {
  // make the ProgressBar dynamic with props and plug it into the Progress component twice
  return (
    <div className="progress-bars">
      <div className="progress-bar progress-bar-1">
        Current Progress
        <Progress type="circle" percent={75} width={250} strokeWidth={10} />
      </div>
      <div className="progress-bar progress-bar-1">
        Past Progress
        <Progress type="circle" percent={75} width={250} strokeWidth={10} />
      </div>
    </div>
  );
}
