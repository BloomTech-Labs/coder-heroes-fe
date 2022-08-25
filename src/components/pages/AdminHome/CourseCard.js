import React, { useEffect } from 'react';
import { Card } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';

const CourseCard = props => {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) return;
    dispatch(getCourses(authState.idToken.idToken));
    console.log(props.course);
  }, [authState]);

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
          Course Subject: <span>{course.subject}</span>
        </p>
        <p>
          Program: <span>{course.program}</span>
        </p>
        <p>
          Course Description: <span>{course.desc}</span>
        </p>
      </Card>
    );
  });
};

const mapStateToProps = state => {
  return { course: state.coursesReducer };
};

export default connect(mapStateToProps)(CourseCard);
