import React, { useState, useEffect } from 'react';
import '../../../styles/index.less';
import InstructorBookingCardModal from './InstructorBookingCardModal';
import { connect } from 'react-redux';
import InstructorBookingCard from './InstructorBookingCard';
import { Tabs } from 'antd';
import {
  isDateInThisWeek,
  isDateToday,
  isOneToOneSession,
} from '../../common/dateHelpers';

const { TabPane } = Tabs;

const InstructorBookingCards = props => {
  const { instructor } = props;
  const [currentModalProps, setCurrentModalProps] = useState(false);
  const [modalHidden, setModalHidden] = useState(true);
  const [currentCourses, setCurrentCourses] = useState();

  useEffect(() => {
    setCurrentCourses(instructor.course_schedule);
  }, []);

  const renderTab = key => {
    if (key === '1') {
      setCurrentCourses(instructor.course_schedule);
    }
    if (key === '2') {
      const arr = instructor.course_schedule.filter(item => {
        const date = item.start_date;
        return isDateToday(date);
      });
      setCurrentCourses(arr);
    }
    if (key === '3') {
      const arr = instructor.course_schedule.filter(item => {
        const date = item.start_date;
        return isDateInThisWeek(date);
      });
      setCurrentCourses(arr);
    }
    if (key === '4') {
      const arr = instructor.course_schedule.filter(item => {
        const classSize = item.size;
        return isOneToOneSession(classSize);
      });
      setCurrentCourses(arr);
    }
  };

  return (
    <>
      <div className="instructor-booking-div">
        <h2
          style={{
            fontSize: '2.5rem',
            color: '#ffca59',
            fontWeight: 'bold',
            margin: '3%',
          }}
        >
          Browse Courses and Apply to Teach
        </h2>
        <Tabs
          animated="true"
          tabPosition="top"
          defaultActiveKey="1"
          onChange={renderTab}
        >
          <TabPane tab="All" key="1">
            {currentCourses &&
              currentCourses.map(course => {
                return (
                  <InstructorBookingCard
                    course={course}
                    setCurrentModalProps={setCurrentModalProps}
                    setModalHidden={setModalHidden}
                    modalHidden={modalHidden}
                  />
                );
              })}
          </TabPane>
          <TabPane tab="Today" key="2">
            {currentCourses &&
              currentCourses.map(course => {
                return (
                  <InstructorBookingCard
                    course={course}
                    setCurrentModalProps={setCurrentModalProps}
                    setModalHidden={setModalHidden}
                    modalHidden={modalHidden}
                  />
                );
              })}
          </TabPane>
          <TabPane tab="This Week" key="3">
            {currentCourses &&
              currentCourses.map(course => {
                return (
                  <InstructorBookingCard
                    course={course}
                    setCurrentModalProps={setCurrentModalProps}
                    setModalHidden={setModalHidden}
                    modalHidden={modalHidden}
                  />
                );
              })}
          </TabPane>
          <TabPane tab="1:1 Sessions" key="4">
            {currentCourses &&
              currentCourses.map(course => {
                return (
                  <InstructorBookingCard
                    course={course}
                    setCurrentModalProps={setCurrentModalProps}
                    setModalHidden={setModalHidden}
                    modalHidden={modalHidden}
                  />
                );
              })}
          </TabPane>
        </Tabs>
        <div className="modal-container">
          <div
            className={`${
              modalHidden
                ? 'modal-overlay hide-modal'
                : 'modal-overlay show-modal'
            }`}
          >
            <InstructorBookingCardModal
              currentModalProps={currentModalProps}
              setCurrentModalProps={setCurrentModalProps}
              setModalHidden={setModalHidden}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps, {})(InstructorBookingCards);
