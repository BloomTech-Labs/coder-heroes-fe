import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { connect, useDispatch } from 'react-redux';
import {
  addBadgeToStudent,
  removeBadgeFromStudent,
} from '../../../redux/actions/classroomActions';
const { Meta } = Card;

const FeedbackBadges = props => {
  const { badge, studentBadges } = props;
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  const dispatch = useDispatch();

  const addValue = {
    badge_id: badge.badge_id,
    student_id: props.class.currentStudentId,
    badge: badge,
  };

  const removeValue = {
    badge_id: badge.badge_id,
    student_id: props.class.currentStudentId,
    badge: badge,
  };

  const assignBadge = e => {
    e.preventDefault();
    console.log(e);
    console.log(addValue);
    dispatch(
      addBadgeToStudent(
        idToken,
        addValue.badge_id,
        addValue.student_id,
        addValue.badge
      )
    );
  };

  const removeBadge = e => {
    e.preventDefault();
    console.log(e);
    console.log(removeValue);
    dispatch(
      removeBadgeFromStudent(
        idToken,
        removeValue.badge_id,
        removeValue.student_id,
        removeValue.badge
      )
    );
  };

  const hasBadge = studentBadges.some(i => i.name === badge.name);

  switch (hasBadge) {
    case true:
      return (
        <div>
          <Card className="badge__card" hoverable>
            <Button onClick={removeBadge}>Remove Badge</Button>
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
              title={badge.name + ' earned'}
            />
          </Card>
        </div>
      );
    case false:
      return (
        <div>
          <Card className="badge__card" hoverable>
            <Button onClick={assignBadge}>Add Badge</Button>
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
              title={badge.name + ' not earned'}
            />
          </Card>
        </div>
      );
    default:
      return null;
  }
};

const mapStateToProps = state => {
  return {
    class: state.classroomReducer,
  };
};

export default connect(mapStateToProps, {
  addBadgeToStudent,
  removeBadgeFromStudent,
})(FeedbackBadges);
