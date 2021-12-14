import React, { useState } from 'react';
import '../../../styles/ParentStyles/index.less';
import 'antd/dist/antd.css';
import { Calendar, Badge, Modal, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';

const dummyAvailableCourses = [
  {
    session_id: 1,
    course_id: 1,
    instructor_id: 1,
    instructor_name: 'Test003',
    instructor_rating: 2,
    size: 15,
    subject: 'CS101',
    description: 'Computer Science fundamentals',
    prereqs: [],
    start_date: '2021-12-10T07:00:00.000Z',
    end_date: '2022-10-10T07:00:00.000Z',
    start_time: '17:00:00',
    end_time: '18:00:00',
    location: 'https://zoom.us/my/john123',
  },
  {
    session_id: 3,
    course_id: 5,
    instructor_id: 10,
    instructor_name: 'Mark',
    instructor_rating: 5,
    size: 20,
    subject: 'Fundamental Python',
    description: 'Computer Science fundamentals',
    prereqs: ['JavaScript', 'HTML', 'CSS'],
    start_date: '2021-12-10T07:00:00.000Z',
    end_date: '2022-10-10T07:00:00.000Z',
    start_time: '17:00:00',
    end_time: '18:00:00',
    location: 'https://zoom.us/my/john123',
  },
  {
    session_id: 2,
    course_id: 3,
    instructor_id: 2,
    instructor_name: 'Test006',
    instructor_rating: 4,
    size: 16,
    subject: 'JavaScriptB',
    description: 'Intermediate JavaScript.',
    prereqs: ['JavaScriptA'],
    start_date: '2021-12-05T07:00:00.000Z',
    end_date: '2022-10-11T07:00:00.000Z',
    start_time: '15:00:00',
    end_time: '16:00:00',
    location: 'https://zoom.us/my/john321',
  },
];

function displayedItem(value, current, item) {
  return {
    type: current === value ? 'warning' : 'success',
    session_id: item.session_id,
    course_id: item.course_id,
    instructor_id: item.instructor_id,
    instructor_name: item.instructor_name,
    instructor_rating: item.instructor_rating,
    size: item.size,
    subject: item.subject,
    description: item.description,
    prereqs: item.prereqs,
    start_date: item.start_date,
    end_date: item.end_date,
    start_time: item.start_time,
    end_time: item.end_time,
    location: item.location,
  };
}

function Sessions(props) {
  const { listData, activeModal, showModal, handleCancel, handleClick } = props;
  return (
    <ul className="ulcell">
      {listData.map(item => {
        const {
          session_id,
          type,
          subject,
          description,
          prereqs,
          start_date,
          end_date,
          start_time,
          end_time,
          location,
          instructor_name,
          instructor_rating,
        } = item;
        return (
          <li className="cell" key={session_id}>
            <Badge className="badge capital" status={type} text={subject} />
            <Button
              onClick={() => showModal(session_id)}
              type="primary"
              shape="round"
              icon={<InfoCircleOutlined />}
              size={'small'}
            >
              {' '}
              details
            </Button>
            {session_id === activeModal ? (
              <Modal
                className="events capital"
                title={subject}
                visible={true}
                onCancel={handleCancel}
                footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="book" type="primary" onClick={handleClick}>
                    Book Now!
                  </Button>,
                ]}
              >
                <div className="capital">course description: {description}</div>
                <div>
                  prerequisites:
                  {prereqs.length > 0 ? (
                    prereqs.map((itm, idx) => {
                      return <p key={idx}>{itm}</p>;
                    })
                  ) : (
                    <>N/A</>
                  )}
                </div>
                <div>first day of class: {dateConverter(start_date)}</div>
                <div>last day of class: {dateConverter(end_date)}</div>
                <div className="time">
                  time: {timeConverter(start_time)} - {timeConverter(end_time)}
                </div>
                <div>
                  location:<a href={location}>{location}</a>
                </div>
                <div>instructor: {instructor_name}</div>
                <div>instructor rating: {instructor_rating}</div>
              </Modal>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function ParentCalendar() {
  const [courses, setCourses] = useState(dummyAvailableCourses);
  const [activeModal, setActiveModal] = useState(0);

  // when the calendar mounts, get the available courses/sessions from reducer and set it to courses

  const today = new Date().toISOString().slice(0, 10);
  const thisMonth = new Date().toISOString().slice(0, 7);

  function getListData(value) {
    let listData = [];
    let val = value.format('YYYY-MM-DD');

    courses.forEach(item => {
      let startDate = item.start_date.slice(0, 10);
      switch (val) {
        case startDate:
          if (
            listData.length > 0 &&
            listData[0].start_date.slice(0, 10) === startDate
          ) {
            listData.push(displayedItem(val, today, item));
          } else {
            listData = [displayedItem(val, today, item)];
          }
          break;
        default:
      }
    });

    return listData || [];
  }

  const showModal = id => {
    setActiveModal(id);
  };

  const handleCancel = () => {
    setActiveModal(0);
  };

  const handleClick = () => {
    return null;
  };

  // value's format mm/dd/yyyy
  function dateCellRender(value) {
    const listData = getListData(value);

    return (
      <Sessions
        listData={listData}
        activeModal={activeModal}
        showModal={showModal}
        handleCancel={handleCancel}
        handleClick={handleClick}
      />
    );
  }

  function getMonthData(value) {
    let listData = [];
    let val = value.format('YYYY-MM');

    courses.forEach(item => {
      let startMonth = item.start_date.slice(0, 7);
      switch (val) {
        case startMonth:
          if (
            listData.length > 0 &&
            listData[0].start_date.slice(0, 7) === startMonth
          ) {
            listData.push(displayedItem(val, thisMonth, item));
          } else {
            listData = [displayedItem(val, thisMonth, item)];
          }
          break;
        default:
      }
    });

    return listData || [];
  }

  function monthCellRender(value) {
    const listData = getMonthData(value);
    return listData ? (
      <Sessions
        listData={listData}
        activeModal={activeModal}
        showModal={showModal}
        handleCancel={handleCancel}
        handleClick={handleClick}
      />
    ) : null;
  }

  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </>
  );
}

export default ParentCalendar;
