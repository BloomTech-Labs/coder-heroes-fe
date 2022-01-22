import React from 'react';

function bannerContent(title, content) {
  return (
    <div className="dashboard-banner">
      <div className="banner-conent">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="welcome-content">
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  const path = window.location.pathname;
  if (path === '/parent' || path === '/instructor') {
    return bannerContent('dashboard', 'welcome back!');
  } else if (path === '/parent-booking') {
    return bannerContent(
      'bookings list',
      "view your children's reserved courses"
    );
  } else if (path === '/instructor-booking') {
    return bannerContent('Apply to Course', 'Select Courses');
  } else if (path === '/instructor-add-course') {
    return bannerContent('Build Your Own Program', '');
  } else if (path === '/family') {
    return bannerContent('Family', '');
  } else if (path === '/news-feed') {
    return bannerContent('News Feed');
  } else {
    return bannerContent('Dashboard', 'Welcome back!');
  }
}
export default Banner;
