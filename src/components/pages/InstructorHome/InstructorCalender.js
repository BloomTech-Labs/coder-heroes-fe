import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import './index.css';
const InstructorCalender = ({ dummyData }) => {
  const [courses, setCourses] = useState(dummyData);
  const [course, setCourse] = useState();

  function getListData(value) {
    courses.map(list => {
      setCourse(list);
    });
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', ...course }];
        break;
      case 10:
        listData = [{ type: 'success', ...course }];
        break;
      case 15:
        listData = [
          { type: 'success', ...course },
          { type: 'success', ...course },
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
            <Badge status={item.type} text={item.description} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <section className="site-calendar-demo-card">
        <div>
          <h1>Your Calender</h1>
          <div className="sub-items">
            <h2>Subheader</h2>
            <button>View Button</button>
            <button>Add</button>
          </div>
        </div>

        <Calendar dateCellRender={dateCellRender} />
      </section>
    </>
  );
};

export default InstructorCalender;
