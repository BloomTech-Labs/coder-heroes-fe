import React, { useState } from 'react';
import '../../../styles/registration.less';

export default function HowManyStudents() {
  const [numStudents, setNumStudents] = useState(1);

  const handleChange = e => {
    setNumStudents(e.target.value);
  };

  return (
    <div className="reg-content-container email-confirmation">
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
          <a href="#">Create Profiles</a>
          {/* update href after finding correct path from Okta */}
        </div>
      </div>
    </div>
  );
}
