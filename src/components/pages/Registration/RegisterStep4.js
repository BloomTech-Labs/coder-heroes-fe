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

const RegisterStep4 = () => {
  const [studentArr, setStudentArr] = useState(initialStudentArr);
  const [parentInfo, setParentInfo] = useState(initialParentInfo);

  // send accountDetails to the backend
  const accountDetails = {
    ...parentInfo,
    children: studentArr,
  };

  const handleSubmit = e => {
    e.preventDefault();
    // use axios to post account details
  };

  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={3} />

      <div className="reg-form-container">
        <form onSubmit={handleSubmit}>
          <div className="profile-container">
            <h1 className="form-title">Student Profiles</h1>

            <div className="student-form-container">
              {studentArr.map((student, idx) => (
                <StudentForm
                  key={idx}
                  setStudentArr={setStudentArr}
                  studentArr={studentArr}
                  idx={idx}
                />
              ))}
            </div>
          </div>

          <div className="content reg-btn-container">
            <a href="/register-3">back</a>
            <button onClick={handleSubmit}>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep4;
