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

const initialValues = [
  {
    icon: <UserOutlined style={{ color: '#F79E1B' }} />,
    title: 'My Students',
    value: 0,
  },
  {
    icon: <BarChartOutlined style={{ color: '#F79E1B' }} />,
    title: 'Active Course',
    value: 0,
  },
  {
    icon: <BarChartOutlined style={{ color: '#F79E1B' }} />,
    title: 'Completed Course',
    value: 0,
  },
  {
    icon: <DollarOutlined style={{ color: '#F79E1B' }} />,
    title: 'Total Earnings',
    value: '$' + '0',
  },
];

function InstructorStats() {
  const [stats, setStats] = useState(initialValues);

  useEffect(() => {
    setStats(getStats());
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
                <h5>{stat.value}</h5>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default InstructorStats;
