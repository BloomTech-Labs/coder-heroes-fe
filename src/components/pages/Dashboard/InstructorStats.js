import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import '../../../styles/InstructorStyles/statsStyle.less';
import { Card, Typography } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { getCurrentUser } from '../../../redux/actions/userActions';
import {
  getInstructor,
  getCourses,
} from '../../../redux/actions/instructorActions';

const initialValues = {
  students: 0,
  activeCourses: 0,
  completedCourses: 0,
  totalCourse: 0,
};
function InstructorStats(props) {
  const { authState, authService } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  const [stats, setStats] = useState(initialValues);

  useEffect(() => {
    if (!props.user.name) {
      dispatch(getCurrentUser(idToken, authState, authService));
    }
    // eslint-disable-next-line
  }, [dispatch, idToken]);

  useEffect(() => {
    dispatch(getInstructor(idToken, props.user.profile_id));
  }, [dispatch, idToken, props.user.profile_id]);

  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  useEffect(() => {
    let completed = 0;
    let active = 0;
    props.courses.forEach(course => {
      if (course.active) {
        active += 1;
      } else {
        completed += 1;
      }
      setStats({
        ...stats,
        completedCourses: completed,
        activeCourses: active,
      });
    });
    // eslint-disable-next-line
  }, [props.courses]);

  const { Title } = Typography;

  return (
    <>
      <Title className="instructor__name">{props.user.name}</Title>
      <div class="stats-wrapper">
        <Card id="ant-card-stat">
          <div class="stat-icon-wrapper">
            <UserOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />
          </div>
          <div class="stat-content">
            <p>Students</p>
            <h3>{stats.students}</h3>
          </div>
        </Card>
        <Card id="ant-card-stat">
          <div class="stat-icon-wrapper">
            <BarChartOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />
          </div>
          <div class="stat-content">
            <p>Active Course</p>
            <h3>{stats.activeCourses}</h3>
          </div>
        </Card>
        <Card id="ant-card-stat">
          <div class="stat-icon-wrapper">
            <BarChartOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />
          </div>
          <div class="stat-content">
            <p>Completed Course</p>
            <h3>{stats.completedCourses}</h3>
          </div>
        </Card>
        <Card id="ant-card-stat">
          <div class="stat-icon-wrapper">
            <StarOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />
          </div>
          <div class="stat-content">
            <p>Rating</p>
            <h3>{props.instructor.rating}</h3>
          </div>
        </Card>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser,
    instructor: state.instructorReducer.instructor,
    courses: state.instructorReducer.courses,
  };
};
export default connect(mapStateToProps)(InstructorStats);
