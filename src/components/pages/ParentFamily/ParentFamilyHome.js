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
          <div className="profile-details">
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
        <h1 className="students-section-title">Students</h1>
        <div className="student-card-container">
          <div className="student-details"></div>
        </div>
      </div>
    </div>
  );
};

export default ParentFamilyHome;
