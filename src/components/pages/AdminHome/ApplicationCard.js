import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import '../../../styles/AdminDashboardHome/index.less';
//TO-DO: Implement Auth0

const ApplicationCard = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = id => {
    history.push(`/instructors/${id}`); // Might have to change the route.
  };

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
        <button
          class="card-button"
          onClick={() => handleOnClick(app.instructor_id)}
        >
          See More
        </button>
      </Card>
    );
  });
};

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps)(ApplicationCard);
