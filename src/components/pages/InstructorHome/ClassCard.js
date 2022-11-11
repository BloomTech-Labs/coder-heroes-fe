import React, { useState } from 'react';
import { Card, Avatar, Badge } from 'antd';
import { useDispatch } from 'react-redux';
import { delCourse, editCourse } from '../../../redux/actions/coursesActions';
import { setCourseId } from '../../../redux/actions/classroomActions';

import { useHistory } from 'react-router-dom';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import '../../../styles/InstructorStyles/index.less';

//TO-DO: Implement Auth0
const { Meta } = Card;

const ClassCard = ({ course }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    course_name: course.course_name,
  });

  const navigate = useHistory();

  const {
    max_size,
    start_time,
    end_time,
    start_date,
    end_date,
    days_of_week,
    location,
  } = course;

  const handleNavigate = e => {
    e.preventDefault();
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

  //TO-DO: Implement Auth0 - handleDelete
  const handleDelete = () => {
    dispatch(delCourse(course.course_id));
  };

  //TO-DO: Implement Auth0 - handleEdit
  const handleEdit = () => {
    setEditing(!editing);
    dispatch(editCourse({ ...course, course_name: state.course_name }));
  };

  const myStyle = {
    width: '20%',
    margin: '1rem .5rem',
    backgroundColor: 'White',
    wordWrap: 'normal',
    border: '0.997362px solid #FEAD2A',
    boxShadow:
      '0px 3.98945px 3.98945px rgba(0, 0, 0, 0.25), 0px 3.98945px 3.98945px rgba(0, 0, 0, 0.25)',
    borderRadius: '19.9472px',
    textAlign: 'center',
  };

  const data = [
    { title: 'Class Size', text: max_size },
    { title: 'Start Time', text: timeConverter(start_time) },
    { title: 'End Time', text: timeConverter(end_time) },
    { title: 'Start Date', text: dateConverter(start_date) },
    { title: 'End Date', text: dateConverter(end_date) },
    { title: 'Days', text: days_of_week },
    { title: 'Location', text: location },
  ];

  return (
    <>
      <Card
        className="course__card"
        onClick={handleNavigate}
        hoverable
        style={myStyle}
      >
        <Meta
          className="course__info"
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
        <Meta
          className="avatar"
          avatar={
            <Badge count={1} className="course__card__badge">
              <Avatar size={128} className="course__card__image" />
            </Badge>
          }
        />
        <br></br>
        {data.map((itm, idx) => {
          return (
            <div className="course_details" key={idx}>
              {itm.title}: {itm.text}
            </div>
          );
        })}
        <button className="course_button" onClick={() => handleCancel()}>
          {editing ? 'Cancel' : 'Classroom'}
        </button>
        {editing && <button onClick={handleEdit}>Save</button>}
        {/* <button className="course_button" onClick={handleDelete}>Delete</button> */}
      </Card>
    </>
  );
};

export default ClassCard;
