import React from 'react';
import { Card, Avatar, Badge } from 'antd';

const { Meta } = Card;

const StudentCard = ({ student }) => {
  return (
    <>
      <Card
        className="student__card"
        style={{
          width: 250,
          margin: '2rem',
          borderRadius: '10px',
        }}
        hoverable
        bordered
      >
        <Meta
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
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
      </Card>
    </>
  );
};

export default StudentCard;
