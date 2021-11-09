import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Calendar, Badge, Modal } from 'antd';

import { connect } from 'react-redux';

function ParentCalendar(props) {
  const { schedule } = props;
  const [course, setCourse] = useState('');
  const [time, setTime] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  // const handleBadgeClick = e => {
  //   console.log(e.target.index);
  // };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, idx) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} onClick={showModal} />
            <Modal
              title={item.content}
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>{item.content}</p>
            </Modal>
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
