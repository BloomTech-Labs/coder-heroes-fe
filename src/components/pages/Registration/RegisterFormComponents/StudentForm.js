import React, { useState } from 'react';
import '../../../../styles/registration.less';
import avi1 from '../../../../img/Avatars/Avatar01.svg';
import avi2 from '../../../../img/Avatars/Avatar03.svg';
import avi3 from '../../../../img/Avatars/Avatar15.svg';
import avi4 from '../../../../img/Avatars/Avatar10.svg';
import avi5 from '../../../../img/Avatars/Avatar06.svg';
import avi6 from '../../../../img/Avatars/Avatar07.svg';
import avi7 from '../../../../img/Avatars/Avatar16.svg';

export default function StudentForm() {
  const initialValues = {
    name: '',
    pronoun: '',
    age: '',
    grade: '',
    studentEmail: '',
    avatarURL: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const onChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formValues);

  return (
    <div className="student-form">
      <label>
        <input
          name="name"
          type="text"
          placeholder="*Student Name"
          value={formValues.name}
          onChange={onChange}
        />
      </label>

      <label>
        <input
          name="pronoun"
          type="text"
          placeholder="*Pronoun"
          value={formValues.pronoun}
          onChange={onChange}
        />
      </label>

      <label>
        <input
          name="age"
          type="text"
          placeholder="*Age"
          value={formValues.age}
          onChange={onChange}
        />
      </label>

      <label>
        <input
          name="grade"
          type="text"
          placeholder="*Grade"
          value={formValues.grade}
          onChange={onChange}
        />
      </label>

      <label>
        <input
          name="student-email"
          type="text"
          placeholder="*Student Email"
          value={formValues.studentEmail}
          onChange={onChange}
        />
      </label>

      <div className="avatars">
        <img src={avi1} />
        <img src={avi2} />
        <img src={avi3} />
        <img src={avi7} />
        <img src={avi5} />
        <img src={avi6} />
        <img src={avi4} />
        <button>+</button>
      </div>

      <p>select or upload an avatar</p>
    </div>
  );
}
