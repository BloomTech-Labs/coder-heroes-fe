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
    case '/parent' || '/instructor':
      return bannerContent('Dashboard', 'welcome back!');
    case '/parent-booking':
      return bannerContent('Courses', "view your children's reserved courses");
    case '/instructor-booking':
      return bannerContent('Apply to Course', 'Select Courses');
    case '/instructor-add-course':
      return bannerContent('Create', 'your own course');
    case '/family':
      return bannerContent('Family', '');
    case '/instructor-news-feed' || '/parent-news-feed':
      return bannerContent('News Feed');
    case '/classroom':
      return bannerContent('Classroom');
    default: {
      bannerContent('Dashboard', 'Welcome back!');
    }
  }
}
