import React from 'react';
import { Card, Avatar, Badge } from 'antd';

const { Meta } = Card;

const FeedbackBadges = ({ badges }) => {
  return (
    <div>
      <Card className="student__card" hoverable>
        <Meta
          className="student__info"
          avatar={
            <Badge count={21} className="student__card__badge">
              <Avatar
                src={badges.image}
                size={128}
                className="badges__card__image"
              />
            </Badge>
          }
          title={badges.name}
        />
      </Card>
    </div>
  );
};

export default FeedbackBadges;
