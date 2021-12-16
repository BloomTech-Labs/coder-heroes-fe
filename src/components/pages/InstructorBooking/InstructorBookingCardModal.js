import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';

const InstructorBookingCardModal = props => {
  const { currentModalProps, setCurrentModalProps, setModalHidden } = props;

  const { start_time, start_date, size, subject, prereq } = currentModalProps;

  const closeModal = () => {
    setModalHidden(true);
    setCurrentModalProps(false);
  };

  const history = useHistory();
  const applyButtonClick = () => {
    history.push('/instructor-booking-confirm');
  }; // redirect to application confirmation page

  return (
    <Card>
      <div class="modal-card">
        <h1>{subject}</h1>
        {currentModalProps && (
          <p>
            When: {dateConverter(start_date)}, {timeConverter(start_time)}
          </p>
        )}
        <p>Class Size: {size}</p>
        <p>Description: {subject}</p>
        <p>Prerequisite: {prereq}</p>
        <button type="button" onClick={applyButtonClick} id="btn-book">
          Apply
        </button>
        <button className="close-modal-btn" onClick={closeModal}>
          <CloseOutlined />
        </button>
      </div>
    </Card>
  );
};
export default InstructorBookingCardModal;
