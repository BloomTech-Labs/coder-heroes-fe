import React, { useState } from 'react';
import { Calendar, Modal } from 'antd';
import '../../../styles/index.less';
import { connect } from 'react-redux';
import { setSelectedCourse } from '../../../redux/actions/instructorActions';

const InstructorCalender = props => {
  const { instructor } = props;
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = item => {
    setIsModalVisible(true);
    setSelectedCourse(item);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function getListData(value) {
    let listData = [];
    console.log(value.format('L'));

    const calendarDate = value._d.toLocaleString('en-US', {
      day: '2-digit',
      year: 'numeric',
      month: '2-digit',
    });

    instructor.course_schedule.forEach(item => {
      if (item.start_date.replaceAll('-', '/') === calendarDate) {
        listData.push(item);
      }
    });
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <div>
        <ul className="events">
          {listData.map(item => (
            <li
              key={item.id}
              className="list"
              onClick={e => {
                showModal(item);
              }}
            >
              {item.start_time}
              <br />
              <div className="subject">{item.subject}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <section className="site-calendar-demo-card">
        <div>
          <h1>Your Calender</h1>

          <Modal
            title="Selected Course"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h3>{selectedCourse.description}</h3>
            <p>Course Date: {selectedCourse.start_date}</p>
            <p>
              Course Time:
              {`${selectedCourse.start_time}-${selectedCourse.end_time}`}
            </p>
            <p>
              Course Location:
              {selectedCourse.location}
            </p>
          </Modal>
        </div>
        <Calendar dateCellRender={dateCellRender} />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state.instructorReducer);
  return { instructor: state.instructorReducer };
};
export default connect(mapStateToProps, { setSelectedCourse })(
  InstructorCalender
);
