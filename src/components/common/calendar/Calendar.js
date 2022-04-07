import React, { useState, useEffect } from 'react';
import '../../../styles/calendar.less';
import 'antd/dist/antd.css';
import { Calendar, Modal, Badge, Button } from 'antd';
import CalendarModal from './CalendarModal';
import axiosWithAuth from '../../../utils/axiosWithAuth';

function CalendarApp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [event, setEvent] = useState(null);
  const [eventsArr, setEventsArr] = useState([]);
  const [eventFlag, setEventFlag] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get('/calendar-events/user')
      .then(res => {
        setEventsArr(res.data.events);
      })
      .catch(err => console.error(err));
    return () => setEventFlag(false);
  }, [eventFlag]);

  const showModal = value => {
    setEvent(value);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/calendar-events/${event.event_id}`)
      .then(() => {
        setEventFlag(true);
        setIsModalVisible(false);
      })
      .catch(err => console.error(err));
  };

  const showScheduleModal = () => {
    setIsScheduleModalVisible(true);
  };

  function getListData(value, events) {
    let listData = [];
    let dateValue = value.format('MM/DD/YYYY'); // you can parse value in every format you want
    events.forEach(e => {
      if (e.date === dateValue) {
        listData.push(e);
      }
    });

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value, eventsArr);
    return (
      <ul className="events">
        {listData.map(item => (
          <p
            key={item.content}
            className={
              item.type === 'success'
                ? 'success-class-event'
                : item.type === 'warning'
                ? 'warning-class-event'
                : 'error-class-event'
            }
          >
            <Badge
              status={item.type}
              text={item.content + ' ' + item.time}
              onClick={() => {
                console.log(item);
                showModal(item);
              }}
            />
            <br />
          </p>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 3) {
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
    <div
      style={{
        display: 'block',
        padding: 30,
        position: 'relative',
      }}
    >
      <Button onClick={() => showScheduleModal()}>Add Event</Button>
      <Calendar
        fullscreen={true}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      <Modal
        title="Event Info"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          {event ? `Event Name: ${event.content}` : 'Something went wrong.'}
        </p>
        <p>
          {event
            ? `Time: ${event.time ? event.time : 'All day'}`
            : 'Something went wrong.'}
        </p>
        <p>
          {event ? `Event Details: ${event.details}` : 'Something went wrong.'}
        </p>
        <Button onClick={handleDelete} className="delete-event-btn">
          Delete Event
        </Button>
      </Modal>
      <CalendarModal
        isModalVisible={isScheduleModalVisible}
        setIsModalVisible={setIsScheduleModalVisible}
        eventsArr={eventsArr}
        setEventsArr={setEventsArr}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setNewEventFlag={setEventFlag}
      />
    </div>
  );
}

export default CalendarApp;
