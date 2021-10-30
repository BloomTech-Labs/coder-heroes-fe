import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';

const { Meta } = Card;

function InstructorProfile() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/474x/db/32/23/db32232ee849096679c32d3392a87694.jpg"
        />
      }
    >
      <Button type="primary" block>
        Instructor Info
      </Button>
    </Card>
  );
}

export default InstructorProfile;
