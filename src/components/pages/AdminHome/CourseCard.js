import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import '../../../styles/AdminDashboardHome/index.less';
//TO-DO: Implement Auth0

const CourseCard = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const idToken = 'To be stubbed out and replaced with auth0';

  useEffect(() => {
    if (!idToken) return;
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  const handleOnClick = id => {
    history.push(`/course/${id}`); // Might have to change the route
  };

  const sorted = props.course.courses.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const firstTen = sorted.slice(0, 10);

  return firstTen.map(course => {
    return (
      <Card
        style={{
          width: '100%',
          backgroundColor: '#FCDFAA',
          marginBottom: '2%',
        }}
      >
        <p>
          Course Subject: <span>{course.course_name}</span>
        </p>
        <p>
          Program: <span>{course.program_name}</span>
        </p>
        <p>
          Course Description: <span>{course.course_description}</span>
        </p>
        <button
          class="card-button"
          onClick={() => handleOnClick(course.course_id)}
        >
          See More
        </button>
      </Card>
    );
  });
};

const mapStateToProps = state => {
  return { course: state.coursesReducer };
};

export default connect(mapStateToProps)(CourseCard);
