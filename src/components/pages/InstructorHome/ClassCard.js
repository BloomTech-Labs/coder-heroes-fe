import React, { useState } from 'react';
import { Card, Avatar, Badge } from 'antd';
import { useDispatch } from 'react-redux';
import { delCourse, editCourse } from '../../../redux/actions/coursesActions';
import { setCourseId } from '../../../redux/actions/classroomActions';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const ClassCard = ({ course }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    course_name: course.course_name,
  });
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  const navigate = useHistory();

  const handleNavigate = e => {
    e.preventDefault();
    console.log(course.course_id);
    dispatch(setCourseId(course.course_id));
    navigate.push('/classroom');
  };

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    setEditing(!editing);
    setState({
      course_name: course.course_name,
    });
  };
  const handleDelete = () => {
    dispatch(delCourse(idToken, course.course_id));
  };

  const handleEdit = () => {
    setEditing(!editing);
    dispatch(
      editCourse(idToken, { ...course, course_name: state.course_name })
    );
  };

  return (
    <>
      <Card className="course__card" onClick={handleNavigate} hoverable>
        <Meta
          className="course__info"
          avatar={
            <Badge count={1} className="course__card__badge">
              <Avatar size={128} className="course__card__image" />
            </Badge>
          }
          title={
            editing ? (
              <input
                onChange={handleChange}
                name="course_name"
                type="text"
                value={state.course_name}
              />
            ) : (
              course.course_name
            )
          }
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
