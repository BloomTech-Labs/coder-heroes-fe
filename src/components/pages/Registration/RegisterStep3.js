import React from 'react';
import RegistrationProgress from './RegistrationProgress';
import StudentForm from './RegisterFormComponents/StudentForm';
import ParentAccountInfo from './RegisterFormComponents/ParentAccountInfo';
import '../../../styles/registration.less';

const numOfStudents = Number(localStorage.getItem('number of students'));
const studentArr = Array.from(Array(numOfStudents).keys());

export default function() {
  return (
    <div className="reg-content-container">
      <RegistrationProgress step_num={2} />

      <div className="reg-form-container">
        <form>
          <div className="reg-form-title">
            <h1 className="form-title">Parent Account Info</h1>
            <p>* indicates required field</p>
          </div>

          <ParentAccountInfo />

          <div className="profile-container">
            <h1 className="form-title">Student Profiles</h1>

            <div className="student-form-container">
              {studentArr.map(student => (
                <StudentForm key={student} />
              ))}
            </div>
          </div>

          <div className="content reg-btn-container">
            <a href="/register-2">back</a>
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
