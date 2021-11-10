import React, { useState } from 'react';
import '../../../styles/ParentStyles/index.less';
import 'antd/dist/antd.css';

import { Calendar, Badge, Modal } from 'antd';

import { connect } from 'react-redux';
import { useEffect } from 'react';

function ParentCalendar(props) {
  const { schedule } = props;
  const [course, setCourse] = useState('');
  const [time, setTime] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(0);

  // console.log(schedule)

  function getListData(value) {
    const values = schedule.courses.map(items => {
      setCourse(items);
    });

    let arr = [];

    let listData;
    let today = new Date().toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });

    schedule.sessions.forEach(item => {
      let new_startDate = item.start_date.replaceAll('-', '/');
      // let new_endDate = item.end_date.replaceAll('-', '/')
      switch (value.format('L')) {
        case new_startDate:
          listData = [
            {
              type: today === value.format('L') ? 'success' : 'warning',
              content:
                item.course + ' ' + item.start_time + ' - ' + item.end_time,
            },
          ];
          break;
        default:
      }
    });

    return listData || [];
  }

  // const handleBadgeClick = e => {
  //   console.log(e.target.index);
  // };

  const showModal = id => {
    setActiveModal(id);
    // setIsModalVisible(true);
  };

  const handleOk = () => {
    setActiveModal(0);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setActiveModal(0);
    setIsModalVisible(false);
  };

  function dateCellRender(value) {
    const listData = getListData(value);
    let today = new Date().toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });
    return (
      <ul className="events">
        {listData.map(item => {
          return (
            <li className="cell" key={item.schedule_id}>
              {today === value.format('L') ? (
                <div className="today"> Today</div>
              ) : null}
              {console.log('inside badge', item.content)}
              <Badge
                className="badge"
                status={item.type}
                text={item.content}
                onClick={e => showModal(item.schedule_id)}
              />
              {console.log('inside Modal', item.content)}
              <Modal
                className="events"
                title={'my Title'}
                visible={item.schedule_id === activeModal ? true : false}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>{item.content}</p>
                <p>{item.schedule_id}</p>
              </Modal>
            </li>
          );
        })}
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
      <div className="events">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <>
      {/* {console.log(time)}
    {console.log(schedule)} */}
      <Calendar
        className="events"
        // onChange={(value) => {
        //   alert(`Your selected ${value.format('YYYY-MM-DD')}`)
        // }}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />{' '}
    </>
  );
}

const mapStateToProps = state => {
  return {
    schedule: state.parentReducer,
  };
};

export default connect(mapStateToProps)(ParentCalendar);
