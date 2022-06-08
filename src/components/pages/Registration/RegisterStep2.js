import React, { useState } from 'react';
import RegistrationProgress from './RegistrationProgress';
import StudentForm from './RegisterFormComponents/StudentForm';
import ParentAccountInfo from './RegisterFormComponents/ParentAccountInfo';
import '../../../styles/registration.less';

const numOfStudents = Number(localStorage.getItem('number of students'));

const initialStudentArr = new Array(numOfStudents).fill({
  name: '',
  pronoun: '',
  age: '',
  grade: '',
  studentEmail: '',
  avatarURL: '',
  parent_id: '',
});

const initialParentInfo = {
  name: '',
  email: '',
  location: '',
  phone: '',
  notes: '',
  parent_id: '',
  role_id: 3,
  children: [],
};

export default function() {
  const [studentArr, setStudentArr] = useState(initialStudentArr);
  const [parentInfo, setParentInfo] = useState(initialParentInfo);

  // send accountDetails to the backend
  const accountDetails = {
    ...parentInfo,
    children: studentArr,
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = '/register-3';
    // use axios to post account details
  };

  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={1} />

      <div className="reg-form-container">
        <form onSubmit={handleSubmit}>
          <div className="reg-form-title">
            <h1 className="form-title">Parent Account Info</h1>
            <p>* indicates required field</p>
          </div>

          <ParentAccountInfo
            parentInfo={parentInfo}
            setParentInfo={setParentInfo}
          />

          <div className="content reg-btn-container">
            <a href="/register-1">back</a>
            <button onClick={handleSubmit}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
