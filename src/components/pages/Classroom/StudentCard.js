import React from 'react';
import { Card, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const StudentCard = ({ student }) => {
  return (
    <>
      <Card className="student__card" hoverable>
        <Meta
          className="student__info"
          avatar={
            <Badge count={21} className="student__card__badge">
              <Avatar
                src={student.image}
                size={128}
                className="student__card__image"
              />
            </Badge>
          }
          title={student.name}
        />
      </Card>
    </>
  );
};

export default StudentCard;
