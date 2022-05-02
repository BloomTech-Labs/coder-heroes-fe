import React from 'react';
import { Progress } from 'antd';

export default () => (
  <div className="progress-bars">
    <div className="progress-bar progress-bar-1">
      {' '}
      Current Progress
      <Progress type="dashboard" percent={75} size={'large'} />
    </div>
    <div className="progress-bar progress-bar-2">
      {' '}
      Past Progress
      <Progress type="dashboard" percent={75} />
    </div>
  </div>
);
