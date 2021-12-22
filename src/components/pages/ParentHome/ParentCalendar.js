import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../../styles/ParentStyles/index.less';
import 'antd/dist/antd.css';
import { Calendar, Badge, Modal, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import ChildForm from './ChildForm';

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
    price: item.price,
  };
}

function Sessions(props) {
  const {
    listData,
    activeModal,
    showModal,
    childInput,
    handleCancel,
    handleClick,
    setActiveModal,
  } = props;

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
          price,
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
                  <div>
                    {childInput ? (
                      <ChildForm
                        session_id={session_id}
                        price={price}
                        setActiveModal={setActiveModal}
                      />
                    ) : (
                      <Button key="book" type="primary" onClick={handleClick}>
                        Book Now!
                      </Button>
                    )}
                  </div>,
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
                <div>Price: ${price} </div>
              </Modal>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function ParentCalendar(props) {
  // eslint-disable-next-line
  const [sessions, setSessions] = useState(props.availableSessions);
  const [activeModal, setActiveModal] = useState(0);
  const [childInput, setChildInput] = useState(false);

  // when the calendar mounts, get the available sessions from reducer and set it to sessions state

  const today = new Date().toISOString().slice(0, 10);
  const thisMonth = new Date().toISOString().slice(0, 7);

  function getListData(value) {
    let listData = [];

    let val = value.format('YYYY-MM-DD');

    sessions.forEach(item => {
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
    setChildInput(false);
  };

  const handleClick = () => {
    setChildInput(true);
  };

  // value's format mm/dd/yyyy
  function dateCellRender(value) {
    const listData = getListData(value);

    return (
      <Sessions
        listData={listData}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        showModal={showModal}
        childInput={childInput}
        handleCancel={handleCancel}
        handleClick={handleClick}
      />
    );
  }

  function getMonthData(value) {
    let listData = [];
    let val = value.format('YYYY-MM');

    sessions.forEach(item => {
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

const mapStateToProps = state => {
  return {
    availableSessions: state.parentReducer.availableSessions,
  };
};

export default connect(mapStateToProps, {})(ParentCalendar);
