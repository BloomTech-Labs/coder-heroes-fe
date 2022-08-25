import React, { useEffect } from 'react';
import { Card } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';

const ApplicationCard = props => {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) return;
    dispatch(getInstructors(authState.idToken.idToken));
  }, [authState]);

  const sorted = props.instructor.instructors.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const firstTen = sorted.slice(0, 10);

  return firstTen.map(app => {
    return (
      <Card
        style={{
          width: '100%',
          backgroundColor: '#FCDFAA',
          marginBottom: '2%',
        }}
      >
        <p>
          Name: <span>{app.name}</span>
        </p>
        <p>
          Date: <span>{app.created_on}</span>
        </p>
        <p>
          Bio: <span>{app.bio}</span>
        </p>
      </Card>
    );
  });
};

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps)(ApplicationCard);
