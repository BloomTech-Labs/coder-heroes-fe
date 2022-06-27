import React from 'react';
import { Progress, Card } from 'antd';

export default function StudentProgressBar() {
  // make the ProgressBar dynamic with props and plug it into the Progress component twice
  return (
    <div className="progress-bars">
      <div>
        <h4>Current Progress</h4>
        <Card>
          <div className="progress-bar progress-bar-1">
            <p>CoderCamp week 3 progress</p>
            <Progress type="circle" percent={75} width={250} strokeWidth={10} />
            <p>Quick tip: Submit your journal entry to increase your score</p>
          </div>
        </Card>
      </div>
      <div>
        <h4>Past Progress</h4>
        <Card>
          <div className="progress-bar progress-bar-1">
            <p>CoderCamp week 2 progress</p>
            <Progress type="circle" percent={75} width={250} strokeWidth={10} />
          </div>
        </Card>
        <Card>
          <div className="progress-bar progress-bar-1">
            <p>CoderCamp week 1 progress</p>
            <Progress type="circle" percent={75} width={250} strokeWidth={10} />
          </div>
        </Card>
      </div>
    </div>
  );
}
