import React, { useState } from 'react';
import { Card } from 'antd';
import '../../../styles/index.less';

const InstructorBookingCard = ({
  course,
  text,
  setCurrentModalProps,
  setModalHidden,
  currentModalProps,
  modalHidden,
}) => {
  const { start_date, end_date, start_time, end_time, size, subject } = course;

  const toggleModal = () => {
    setModalHidden(!modalHidden);
    return setCurrentModalProps(course);
  };

  return (
    <div>
      <Card title={<h1>{subject}</h1>}>
        <div className="instructor-booking-card">
          <div>{start_date}</div>
          <div>{start_time}</div>
          <button id="btn-book" onClick={() => toggleModal()}>
            Details
          </button>
        </div>
      </Card>
    </div>
  );
};

export default InstructorBookingCard;
