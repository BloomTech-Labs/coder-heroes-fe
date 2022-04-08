import React, { useState, useEffect } from 'react';
import '../../../styles/calendar.less';
import 'antd/dist/antd.css';
import {
  Calendar,
  Modal,
  Badge,
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
} from 'antd';
import moment from 'moment';
import CalendarModal from './CalendarModal';
import axiosWithAuth from '../../../utils/axiosWithAuth';

function CalendarApp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
  const [event, setEvent] = useState(null);
  const [eventsArr, setEventsArr] = useState([]);
  const [showEventEditForm, setShowEditEventForm] = useState(false);

  // eventFlag toggled to trigger useEffect when event is added or deleted
  const [eventFlag, setEventFlag] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('hit');
    if (eventFlag) {
      axiosWithAuth()
        .get('/calendar-events/user')
        .then(res => {
          setEventsArr(res.data.events);
        })
        .catch(err => console.error(err));
    }
    setEventFlag(false);
  }, [eventFlag]);

  useEffect(() => {
    if (event) {
      form.setFieldsValue({
        content: event.content,
        details: event.details,
        date: moment(event.date, 'MM/DD/YYYY'),
        time: moment(event.time, 'h:mm A'),
      });
    }
  }, [event, form, showEventEditForm]);

  const showModal = value => {
    setEvent(value);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowEditEventForm(false);
  };

  const handleEdit = () => {
    setShowEditEventForm(true);
  };

  // edit event form submission handler
  const onFinish = values => {
    axiosWithAuth()
      .put(`/calendar-events/${event.event_id}`, {
        ...values,
        type: 'success',
        date: values.date.format('MM/DD/YYYY'),
        time: values.time.format('h:mm A'),
      })
      .then(() => {
        setEventFlag(true);
        setIsModalVisible(false);
      })
      .catch(err => console.error(err));
    form.resetFields();
    setShowEditEventForm(false);
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
        <button onClick={handleEdit}>Edit Event</button>
        {showEventEditForm && (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="Event Title"
              name="content"
              rules={[
                { required: true, message: 'Please input an event title!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please pick a date!' }]}
            >
              <DatePicker format={'MM/DD/YYYY'} />
            </Form.Item>
            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: 'Please pick a time!' }]}
            >
              <TimePicker use12Hours format="h:mm A" minuteStep={15} />
            </Form.Item>
            <Form.Item
              label="Details"
              name="details"
              rules={[
                {
                  required: true,
                  message: "Please input this event's details!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
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
        setEventFlag={setEventFlag}
      />
    </div>
  );
}

export default CalendarApp;
