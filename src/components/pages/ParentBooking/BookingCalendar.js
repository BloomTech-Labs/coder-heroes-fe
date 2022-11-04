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
    <div className="site-calendar-demo-card">
      <Alert
        className="booking-calendar"
        message={`You selected date: ${selectedValue &&
          selectedValue.format('MM/DD/YYYY')}`}
      />
      <Calendar
        className="booking-calendar calendar-text"
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        fullscreen={false}
        onChange={handleCalendarClick}
      />
    </div>
  );
};

export default BookingCalendar;
