import React from 'react';
import { Card } from 'antd';
import '../../../styles/index.less';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';

const InstructorBookingCard = ({
  course,
  setCurrentModalProps,
  setModalHidden,
  modalHidden,
}) => {
  const { start_date, end_date, start_time, end_time, subject } = course;

  const toggleModal = () => {
    setModalHidden(!modalHidden);
    return setCurrentModalProps(course);
  };

  return (
    <div>
      <Card className="card" title={subject}>
        <div className="instructor-booking-card">
          <div className="left">
            <h2>Start Date & Time: </h2>
            <p>
              {dateConverter(start_date)},{timeConverter(start_time)}
            </p>
            <h2>End Date & Time: </h2>
            <p>
              {dateConverter(end_date)},{timeConverter(end_time)}
            </p>
          </div>
          <div className="right">
            <img
              className="image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="woman drinking coffee"
            ></img>
            <button id="btn-book" onClick={() => toggleModal()}>
              Details
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InstructorBookingCard;
