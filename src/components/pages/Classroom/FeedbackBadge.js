import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { connect, useDispatch } from 'react-redux';
import {
  addBadgeToStudent,
  removeBadgeFromStudent,
} from '../../../redux/actions/classroomActions';
const { Meta } = Card;

const FeedbackBadges = props => {
  const { badge, studentBadges } = props;
  //TO-DO: Implement Auth0
  // const { authState } = useOktaAuth();
  // const { idToken } = authState;

  const dispatch = useDispatch();

  const badgeValues = {
    badge_id: badge.badge_id,
    student_id: props.course.currentStudentId,
    badge: badge,
  };

  const assignBadge = e => {
    e.preventDefault();
    dispatch(
      addBadgeToStudent(
        // idToken,
        badgeValues.badge_id,
        badgeValues.student_id,
        badgeValues.badge
      )
    );
  };

  const removeBadge = e => {
    e.preventDefault();
    dispatch(
      removeBadgeFromStudent(
        // idToken,
        badgeValues.badge_id,
        badgeValues.student_id,
        badgeValues.badge
      )
    );
  };

  const hasBadge = studentBadges.some(i => i.name === badge.name);

  switch (hasBadge) {
    case true:
      return (
        <div className="card_div">
          <Card className="badge__card" hoverable>
            <h2>{badge.name}</h2>
            <Meta
              className="badge__info"
              avatar={
                <Avatar
                  src={
                    require(`../../../styles/ClassroomStyles/badges/${badge.image}-achieved.png`)
                      .default
                  }
                  size={128}
                  className="badge__card__image"
                />
              }
            />
            <Button onClick={removeBadge} className="remove_btn">
              Remove Badge
            </Button>
          </Card>
        </div>
      );
    case false:
      return (
        <div className="card_div">
          <Card className="badge__card" hoverable>
            <h2>{badge.name}</h2>
            <Meta
              className="badge__info"
              avatar={
                <Avatar
                  src={
                    require(`../../../styles/ClassroomStyles/badges/${badge.image}.png`)
                      .default
                  }
                  size={128}
                  className="badge__card__image"
                />
              }
            />
            <Button onClick={assignBadge} className="add_btn">
              Add Badge
            </Button>
          </Card>
        </div>
      );
    default:
      return null;
  }
};

const mapStateToProps = state => {
  return {
    course: state.classroomReducer,
  };
};

export default connect(mapStateToProps, {
  addBadgeToStudent,
  removeBadgeFromStudent,
})(FeedbackBadges);
