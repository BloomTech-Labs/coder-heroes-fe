import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Descriptions } from 'antd';
import './index.css';

const { Meta } = Card;

function InstructorProfile({ dummyData }) {
  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/474x/db/32/23/db32232ee849096679c32d3392a87694.jpg"
        />
      }
    >
      <Button type="primary" block>
        <div>
          <h3>Instructor info</h3>
        </div>
      </Button>
      <Descriptions>
        <Descriptions.Item label="Rating">{`${dummyData[1].rating}`}</Descriptions.Item>
        <Descriptions.Item label="Bio">{`${dummyData[1].bio}`}</Descriptions.Item>
      </Descriptions>
      ,
    </Card>
  );
}

export default InstructorProfile;
