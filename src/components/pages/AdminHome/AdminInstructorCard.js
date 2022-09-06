import React from 'react';
import { Card } from 'antd';

function AdminInstructorCard(props) {
  const { name, bio, status } = props;

  return (
    <Card title={name} className="Instructor-Card">
      <h3>
        Bio: <span className="black">{`${bio}`}</span>
      </h3>
      <h3>
        Approval Status:{' '}
        <span className="black">
          {status === 'false' ? 'Pending' : 'Approved'}
        </span>
      </h3>
      <div className="instructor-button-container">
        <button className="instructor-button">EDIT INSTRUCTOR DETAILS</button>
        <button className="instructor-button">SEE MORE</button>
      </div>
    </Card>
  );
}

export default AdminInstructorCard;
