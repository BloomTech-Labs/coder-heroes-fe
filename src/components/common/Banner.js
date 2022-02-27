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
  switch (path) {
    case path === '/parent' || path === '/instructor':
      return bannerContent('dashboard', 'welcome back!');
    case path === '/parent-booking':
      return bannerContent(
        'bookings list',
        "view your children's reserved courses"
      );
    case path === '/instructor-booking':
      return bannerContent('Apply to Course', 'Select Courses');
    case path === '/instructor-add-course':
      return bannerContent('Build Your Own Program', '');
    case path === '/family':
      return bannerContent('Family', '');
    case path === '/instuctor-news-feed' || path === '/parent-news-feed':
      return bannerContent('News Feed');
    default:
      return bannerContent('Dashboard', 'Welcome back!');
  }
}
export default Banner;
