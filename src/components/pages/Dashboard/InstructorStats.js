import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import '../../../styles/InstructorStyles/statsStyle.less';
import { Card, Typography } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { getStats } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';
import { dummyData } from '../../../dummyData';
import { FormProvider } from 'antd/lib/form/context';
import { getCurrentUser } from '../../../redux/actions/userActions';

const initialValues = {
  students: 0,
  activeCourses: 0,
  completedCourses: 0,
  totalEarnings: 0,
};
function InstructorStats(props) {
  console.log('props', props);
  const { authState, authService } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  const [stats, setStats] = useState(initialValues);

  useEffect(() => {
    if (idToken) {
      dispatch(getCurrentUser(idToken, authState, authService));
      console.log(props);
    }
    // eslint-disable-next-line
  }, [dispatch, idToken]);
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
            <DollarOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />
          </div>
          <div class="stat-content">
            <p>Total Earnings</p>
            <h3>{stats.totalEarnings}</h3>
          </div>
        </Card>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser,
  };
};
export default connect(mapStateToProps)(InstructorStats);
