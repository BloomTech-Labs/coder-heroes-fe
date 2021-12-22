import React from 'react';
import { timeConverter } from '../../common/timeHelpers';
import { List } from 'antd';

const InstructorProgram = props => {
  const { program } = props;

  return (
    <div>
      <List bordered>
        <List.Item>
          <p>
            <b>Subject: {program.subject}</b>
          </p>
          {'\n'}
          <p>Date: {program.date}</p>
          <p>Time: {program.time}</p>
          <p>Approval Status: {program.status}</p>
        </List.Item>
      </List>
    </div>
  );
};

export default InstructorProgram;
