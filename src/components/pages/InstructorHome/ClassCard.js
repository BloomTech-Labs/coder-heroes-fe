import React from 'react';
import { Card, Avatar, Badge } from 'antd';

const { Meta } = Card;

const ClassCard = ({ courses }) => {
  return (
    <>
      <Card className="course__card" hoverable>
        <Meta
          className="course__info"
          avatar={
            <Badge count={1} className="course__card__badge">
              <Avatar size={128} className="course__card__image" />
            </Badge>
          }
          title={courses.class_name}
        />
      </Card>
    </>
  );
};

export default ClassCard;
