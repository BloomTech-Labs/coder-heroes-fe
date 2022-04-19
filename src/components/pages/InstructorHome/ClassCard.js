import React, { useState } from 'react';
import { Card, Avatar, Badge } from 'antd';
import { useDispatch } from 'react-redux';
import { delCourse, editCourse } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';

const { Meta } = Card;

const ClassCard = ({ courses }) => {
  console.log(courses.course_id);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    title: courses.course_name,
  });
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    setEditing(!editing);
  };
  const handleDelete = () => {
    if (courses.course_id) dispatch(delCourse(idToken, courses.course_id));
  };

  const handleEdit = () => {
    setEditing(!editing);
    dispatch(editCourse(courses, state));
  };

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
          title={courses.course_name}
        />
        <button onClick={() => handleCancel()}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
        {editing && <button onClick={handleEdit}>Save</button>}
        <button onClick={handleDelete}>Delete</button>
      </Card>
    </>
  );
};

export default ClassCard;
