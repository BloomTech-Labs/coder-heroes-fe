import React from 'react';
import { Calendar } from 'antd';
import './index.css';
const InstrcutorCalender = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <>
      <section className="site-calendar-demo-card">
        <div>
          <h1>Your Calender</h1>
          <div className="sub-items">
            <h2>Subheader</h2>
            <button>View Button</button>
            <button>Add</button>
          </div>
        </div>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </section>
    </>
  );
};

export default InstrcutorCalender;
