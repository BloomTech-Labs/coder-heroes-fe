import React from 'react';

function Banner() {
  if (
    window.location.pathname === '/parent' ||
    window.location.pathname === '/instructor'
  ) {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="welcome-content">
            <h2>Welcome back!</h2>
          </div>
        </div>
      </div>
    );
  } else if (window.location.pathname === '/parent-booking') {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Booking</h1>
          </div>
          <div className="welcome-content">
            <h2>Select Courses</h2>
          </div>
        </div>
      </div>
    );
  } else if (window.location.pathname === '/instructor-booking') {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Course Application</h1>
          </div>
          <div className="welcome-content">
            <h2>Select Courses</h2>
          </div>
        </div>
      </div>
    );
  } else if (window.location.pathname === '/instructor-booking-confirm') {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Course Application Confirmation</h1>
          </div>
        </div>
      </div>
    );
  } else if (window.location.pathname === '/instructor-add-course') {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Build Your Own Program</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dashboard-banner">
        <div className="banner-conent">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="welcome-content">
            <h2>Welcome back!</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
