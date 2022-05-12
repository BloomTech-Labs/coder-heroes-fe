import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const FeedbackBadges = ({ badge }) => {
  return (
    <div>
      <Card className="badge__card" hoverable>
        <Meta
          className="badge__info"
          avatar={
            <Avatar
              src={`../../../styles/ClassroomStyles/badges/${badge.image}.png`}
              size={128}
              className="badge__card__image"
            />
          }
          title={badge.name}
        />
      </Card>
    </div>
  );
};

export default FeedbackBadges;
