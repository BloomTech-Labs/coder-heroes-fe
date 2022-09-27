import { Alert, Calendar } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const BookingCalendar = ({ handleCalendarClick }) => {
  const [value, setValue] = useState(moment());
  const [selectedValue, setSelectedValue] = useState(moment());

  const onSelect = newValue => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = newValue => {
    setValue(newValue);
  };

  return (
    <div
      className="site-calendar-demo-card"
      style={{
        border: '1px solid #f0f0f0',
        borderRadius: '2px',
      }}
    >
      <Alert
        style={{ minWidth: '600px', maxWidth: '800px' }}
        message={`You selected date: ${selectedValue &&
          selectedValue.format('MM/DD/YYYY')}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        style={{ minWidth: '600px', maxWidth: '800px' }}
        fullscreen={false}
        onChange={handleCalendarClick}
      />
    </div>
  );
};

export default BookingCalendar;
