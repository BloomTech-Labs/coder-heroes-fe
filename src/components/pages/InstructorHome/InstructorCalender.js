import React from 'react';
import { Calendar, Badge } from 'antd';
import './index.css';
import { connect } from 'react-redux';
const InstructorCalender = props => {
  const { instructor } = props;

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', ...instructor.course_schedule }];
        break;
      case 10:
        listData = [{ type: 'success' }];
        break;
      case 15:
        listData = [{ type: 'success' }, { type: 'success' }];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    console.log(listData);
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

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};
export default connect(mapStateToProps)(InstructorCalender);
