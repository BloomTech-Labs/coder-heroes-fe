import React from 'react';

const BookingTimeBtn = ({ filterAvailableTimes, availableTime }) => {
  return (
    <div className="btn-container">
      {availableTime.map((time, index) => {
        return (
          <button
            type="button"
            className="btn"
            key={index}
            onClick={() => filterAvailableTimes(time)}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default BookingTimeBtn;
