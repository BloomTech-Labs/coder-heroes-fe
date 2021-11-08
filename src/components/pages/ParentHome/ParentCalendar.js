import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Calendar, Badge } from 'antd';

import { connect } from 'react-redux';

function ParentCalendar(props) {
  const { schedule } = props;
  const [course, setCourse] = useState('');
  const [time, setTime] = useState('');

  function getListData(value) {
    const values = schedule.courses.map(items => {
      setCourse(items.subject);
    });

    const times = schedule.sessions.map(items => {
      setTime(items.start_time);
    });

    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', content: [course + ' ' + time] }];
        break;
      case 10:
        listData = [{ type: 'success', content: [course + ' ' + time] }];
        break;
      case 15:
        listData = [{ type: 'success', content: [course + ' ' + time] }];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
}

const mapStateToProps = state => {
  return {
    schedule: state.parentReducer,
  };
};

export default connect(mapStateToProps)(ParentCalendar);
