import React from 'react';

import 'antd/dist/antd.css';

import { Calendar, Badge } from 'antd';

function ParentCalendar(props) {
  const { schedule } = props;

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: `Class: ${schedule.courses[0].subject} Time: ${schedule.schedules[0].start_time}`,
          },
          {
            type: 'success',
            content: `Class: ${schedule.courses[1].subject} Time: ${schedule.schedules[1].start_time}`,
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: `Class: ${schedule.courses[2].subject} Time: ${schedule.schedules[2].start_time}`,
          },
          {
            type: 'success',
            content: `Class: ${schedule.courses[0].subject} Time: ${schedule.schedules[0].start_time}`,
          },
          {
            type: 'error',
            content: `Class: ${schedule.courses[1].subject} Time: ${schedule.schedules[1].start_time}`,
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: `Class: ${schedule.courses[2].subject} Time: ${schedule.schedules[2].start_time}`,
          },
          {
            type: 'success',
            content: `Class: ${schedule.courses[0].subject} Time: ${schedule.schedules[0].start_time}`,
          },
          {
            type: 'error',
            content: `Class: ${schedule.courses[1].subject} Time: ${schedule.schedules[1].start_time}`,
          },
          {
            type: 'error',
            content: `Class: ${schedule.courses[2].subject} Time: ${schedule.schedules[2].start_time}`,
          },
          {
            type: 'error',
            content: `Class: ${schedule.courses[0].subject} Time: ${schedule.schedules[0].start_time}`,
          },
          {
            type: 'error',
            content: `Class: ${schedule.courses[1].subject} Time: ${schedule.schedules[1].start_time}`,
          },
        ];
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

export default ParentCalendar;
