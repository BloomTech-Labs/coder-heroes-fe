import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import CreateNewStudent from './CreateNewStudent';
import CurrentCoursesDetails from './CurrentCoursesDetails';
import '../../../styles/ParentStyles/index.less';

const ParentFamilyHome = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(`okta-token-storage`));
    const config = {
      headers: { Authorization: `Bearer ${token.idToken.value}` },
    };
    axios
      .get(`https://coder-heroes-api.herokuapp.com/parent/1/children`, config)
      .then(res => {
        const familyData = res.data;
        setStudentInfo(familyData);
      })
      .catch(err => {
        console.log(`error fetching axios call`);
      });
  }, []);

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
          <button
            className="family-page-button"
            onClick={() => setModal(!modal)}
          >
            Create New Student
          </button>
        </div>
        <div className="student-card-container">
          <h1 className="student-card-name">
            <strong>
              Student Username: {studentInfo ? studentInfo[0].username : ''}
            </strong>
          </h1>
          <div className="student-details">
            <div className="student-details-sides">
              <h1>Email Address: _____</h1>
              <h1>Current Courses: _____</h1>
              <button
                className="family-page-button"
                onClick={() => setModal2(!modal2)}
              >
                Current Courses Details
              </button>
            </div>
            <div className="student-details-sides">
              <h1>Age: {studentInfo ? studentInfo[0].age : ''}</h1>
              <h1> Past Courses: _____</h1>
              <button className="family-page-button">
                Add/Change Prerequisites
              </button>
            </div>
          </div>
        </div>
        {modal && <CreateNewStudent setModal={setModal} />}
        {modal2 && <CurrentCoursesDetails setModal={setModal2} />}
      </div>
    </div>
  );
};

export default ParentFamilyHome;
