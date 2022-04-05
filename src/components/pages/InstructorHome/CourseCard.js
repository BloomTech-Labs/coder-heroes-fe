import React from 'react';
import { Card, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { Meta } = Card;

const CourseCard = props => {
  return (
    <>
      <Link to="/classroom">
        {/* <Card className="course__card" hoverable>
          <Meta
            className="course__info"
            avatar={
              <Badge count={1} className="course__card__badge">
                <Avatar size={128} className="course__card__image" />
              </Badge>
            }
            title={courses.subject}
          />
        </Card> */}
        <h2>Here!!!</h2>
      </Link>
    </>
  );
};

export default CourseCard;
