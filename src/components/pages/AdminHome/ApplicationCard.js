import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';

const initialApplications = [];

const ApplicationCard = () => {
  const [applications, SetApplications] = useState(initialApplications);
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  console.log(authState);

  useEffect(() => {
    dispatch(getInstructors(authState.idToken.idToken)).then(res => {
      console.log(res);
    });
  }, []);

  const sorted = applications.sort(
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
          Date: <span>{app.date}</span>
        </p>
        <p>
          Bio: <span>{app.bio}</span>
        </p>
      </Card>
    );
  });
};
const mapStateToProps = state => {
  return { user: state.instructorReducer };
};

export default connect(mapStateToProps)(ApplicationCard);
