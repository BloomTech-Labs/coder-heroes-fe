import React from 'react';

function bannerContent(title, content) {
  return (
    <div className="dashboard-banner">
      <div className="banner-content">
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

export default function Banner() {
  const path = window.location.pathname;
  switch (path) {
    case '/instructor':
      return bannerContent('Dashboard', 'welcome back!');
    case '/student':
      return bannerContent('Student Dashboard');
    case '/parent-booking':
      return bannerContent(
        'bookings list',
        "view your children's reserved courses"
      );
    case '/parent/achievements':
      return bannerContent('Achievements');
    case '/parent/tasks':
      return bannerContent('Tasks');
    case '/student-tasks':
      return bannerContent('My Tasks');
    case '/parent/resources':
      return bannerContent('Resources');
    case '/student-portfolio':
      return bannerContent('Portfolio +');
    case '/instructor-booking':
      return bannerContent('Apply to Course', 'Select Courses');
    case '/instructor-add-course':
      return bannerContent('Create', 'your own course');
    case '/instructor-news-feed' || '/parent-news-feed':
      return bannerContent('News Feed');
    case '/parent':
      return bannerContent('Newsfeed', '');
    case '/parent/progress':
      return bannerContent('Progress', '');
    case '/student-progress':
      return bannerContent('Progress', '');
    case '/parent/calendar':
      return bannerContent('Calendar', '');
    case '/parent/booking':
      return bannerContent('Courses', '');
    case '/parent/newsfeed':
      return bannerContent('Newsfeed', '');
    case '/parent/family':
      return bannerContent('Choose a Profile', '');
    case '/parent/cart':
      return bannerContent('Cart', '');
    case '/parent/messages':
      return bannerContent('Messages', '');
    case '/classroom':
      return bannerContent('Classroom');
    default: {
      bannerContent('Dashboard', 'Welcome back!');
    }
  }
}
