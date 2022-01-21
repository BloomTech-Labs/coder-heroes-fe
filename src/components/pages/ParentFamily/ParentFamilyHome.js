import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import '../../../styles/ParentStyles/index.less';

const ParentFamilyHome = () => {
  return (
    <div className="family-page-container">
      <ParentSidebar />
      <div className="family-page-content">
        <Banner />
        <div className="profile-card-container">
          <div className="profile-details-headers">
            <h1>Profile</h1>
            <h1>Username</h1>
            <h1>Password</h1>
          </div>
          <div className="profile-data">
            <div>_____</div>
            <div>_____</div>
            <div>_____</div>
          </div>
        </div>
        <div className="between-profile-students">
          <h1 className="students-section-title">Students</h1>
          <button className="family-page-button">Create New Student</button>
        </div>
        <div className="student-card-container">
          <h1 className="student-card-name">
            <strong>Student Name: _____</strong>
          </h1>
          <div className="student-details">
            <div className="student-details-sides">
              <h1>Email Address: _____</h1>
              <h1>Current Courses: _____</h1>
              <button className="family-page-button">
                Current Courses Details
              </button>
            </div>
            <div className="student-details-sides">
              <h1>Age: _____</h1>
              <h1> Past Courses: _____</h1>
              <button className="family-page-button">
                Add/Change Prerequisites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentFamilyHome;
