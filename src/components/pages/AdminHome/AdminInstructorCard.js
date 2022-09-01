import React from 'react';
import { Card, Button } from 'antd';

function AdminInstructorCard(props) {
  const { name, bio, status } = props;

  return (
    <Card title={name} className="Instructor-Card">
      <p className="card-content">{`Bio: ${bio}`}</p>
      <p className="card-content">{`Approval Status: ${status}`}</p>
      <Button className="edit-button">Edit</Button>
    </Card>
  );
}

export default AdminInstructorCard;
