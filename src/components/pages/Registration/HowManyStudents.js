import React, { useState } from 'react';
import '../../../styles/registration.less';
import RegistrationProgress from './RegistrationProgress';

export default function HowManyStudents() {
  const [numStudents, setNumStudents] = useState(1);

  const handleChange = e => {
    setNumStudents(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('number of students', numStudents);
    window.location.href = '/register-3';
  };

  return (
    <div className="reg-content-container email-confirmation">
      <RegistrationProgress step_num={1} />

      <div className="content">
        <p className="color-one">
          How many student profiles would you like to create?
        </p>
        <form>
          <input
            className="student-num"
            type="number"
            value={numStudents}
            onChange={handleChange}
          />
        </form>

        <div className="link-container">
          <button onClick={handleSubmit}>Create Profiles</button>
        </div>
      </div>
    </div>
  );
}
