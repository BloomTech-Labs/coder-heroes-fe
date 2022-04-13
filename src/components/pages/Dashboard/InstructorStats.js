import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../../../styles/InstructorStyles/statsStyle.less';
import { Card } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { getStats } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';

const initialValues = [
  {
    icon: <UserOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />,
    title: 'My Students',
    value: 0,
  },
  {
    icon: <BarChartOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />,
    title: 'Active Course',
    value: 0,
  },
  {
    icon: <BarChartOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />,
    title: 'Completed Course',
    value: 0,
  },
  {
    icon: <DollarOutlined style={{ fontSize: '40px', color: '#F79E1B' }} />,
    title: 'Total Earnings',
    value: '$' + 0,
  },
];

function InstructorStats() {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [stats, setStats] = useState(initialValues);

  useEffect(() => {
    // setStats(getStats()); // ENABLE WHEN READY TO CONNECT STATS TO STATE
  }, []);

  return (
    <>
      <div class="stats-wrapper">
        {stats.map(stat => {
          return (
            <Card id="ant-card-stat">
              <div class="stat-icon-wrapper">{stat.icon}</div>
              <div class="stat-content">
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default InstructorStats;
