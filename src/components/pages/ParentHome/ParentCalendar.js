import React, { useState } from 'react';
import '../../../styles/ParentStyles/index.less';
import 'antd/dist/antd.css';

import { Calendar, Badge, Modal, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

function ParentCalendar(props) {
  const { schedule } = props;
  const [course, setCourse] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(0);
  const [fullProgram, setFullProgram] = useState(false);

  function getListData(value) {
    schedule.courses.map(items => {
      setCourse(items);
    });

    let listData = [];
    let today = new Date().toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });
    // console.log(schedule.sessions);
    schedule.sessions.forEach(item => {
      let new_startDate = item.start_date.replace(/-/g, '/');
      switch (value.format('L')) {
        case new_startDate:
          if (
            listData.length > 0 &&
            listData[0].start_date === item.start_date
          ) {
            listData.push({
              type: today === value.format('L') ? 'success' : 'warning',
              content: item.course,
              start_time: item.start_time,
              start_date: item.start_date,
              end_time: item.end_time,
              schedule_id: item.schedule_id,
            });
          } else {
            listData = [
              {
                type: today === value.format('L') ? 'success' : 'warning',
                content: item.course,
                start_time: item.start_time,
                start_date: item.start_date,
                end_time: item.end_time,
                schedule_id: item.schedule_id,
              },
            ];
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

  const showFull = date => {
    let newDate = date._d.toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });
    newDate = newDate.replace(/\//g, '-');
    let newArr = schedule.sessions.filter(item => {
      return item.start_date === newDate;
    });

    setFullProgram(newArr);
  };
  const handleOk = () => {
    setActiveModal(0);
    setIsModalVisible(false);
  };

  const handleOkFull = () => {
    setFullProgram(false);
  };

  const handleCancel = () => {
    setActiveModal(0);
    setIsModalVisible(false);
  };

  const handleCancelFull = () => {
    setFullProgram(false);
  };

  function dateCellRender(value) {
    const listData = getListData(value);
    let today = new Date().toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });
    let newDate = value._d.toLocaleString('en-US', {
      day: '2-digit', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: '2-digit', // numeric, 2-digit, long, short, narrow
    });
    newDate = newDate.replace(/\//g, '-');

    return (
      <ul className="ulcell">
        {listData.length > 0 && listData[0].start_date === newDate ? (
          <Button
            className="fullButton"
            onClick={e => showFull(value)}
            type="primary"
            shape="round"
            icon={<InfoCircleOutlined />}
            size={'small'}
          >
            Show full program
          </Button>
        ) : null}

        {listData.map(item => {
          return (
            <li className="cell" key={item.schedule_id}>
              {fullProgram && (
                <Modal
                  className="full capital"
                  title={'Full Day Program'}
                  onOk={handleOkFull}
                  onCancel={handleCancelFull}
                  visible={true}
                >
                  {fullProgram.map(item => {
                    return (
                      <>
                        <p>{item.course}:</p>{' '}
                        <p>
                          {item.start_time} - {item.end_time}
                        </p>{' '}
                        <p>------</p>
                      </>
                    );
                  })}
                </Modal>
              )}
              <Badge
                className="badge capital"
                status={item.type}
                text={item.content}
              />

              <Button
                onClick={e => showModal(item.schedule_id)}
                type="primary"
                shape="round"
                icon={<InfoCircleOutlined />}
                size={'small'}
              ></Button>
              {item.schedule_id === activeModal ? (
                <Modal
                  className="events capital"
                  title={item.content}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  visible={true}
                >
                  <p className="capital">{item.content}</p>
                  <p className="time">
                    {item.start_time} - {item.end_time}
                  </p>
                </Modal>
              ) : null}
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
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    schedule: state.parentReducer,
  };
};

export default connect(mapStateToProps)(ParentCalendar);
