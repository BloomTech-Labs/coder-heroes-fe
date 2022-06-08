import React, { useState } from 'react';
import '../../../../styles/registration.less';
import avi1 from '../../../../img/Avatars/Avatar01.svg';
import avi2 from '../../../../img/Avatars/Avatar03.svg';
import avi3 from '../../../../img/Avatars/Avatar15.svg';
import avi4 from '../../../../img/Avatars/Avatar10.svg';
import avi5 from '../../../../img/Avatars/Avatar06.svg';
import avi6 from '../../../../img/Avatars/Avatar07.svg';
import avi7 from '../../../../img/Avatars/Avatar16.svg';

export default function StudentForm({ studentArr, setStudentArr, idx }) {
  const [formValues, setFormValues] = useState(studentArr[0]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const updateStudent = formValues => {
    let newArr = [...studentArr];
    newArr[idx] = formValues;
    setStudentArr(newArr);
  };

  const onChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    updateStudent(formValues);
  };

  const updateAvatar = e => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.src,
    });
    updateStudent(formValues);
    setSelectedAvatar(e.target.src);
    // sets the selected avatar to the img src
  };

  const isSelectedAvatar = src =>
    selectedAvatar === src ? 'selected-avatar' : '';
  // if the selected avatar matches the src of the clicked avatar, the class name will be set to selected avatar

  return (
    <div className="student-form">
      <input
        name="name"
        type="text"
        placeholder="*Student Name"
        value={formValues.name}
        onChange={onChange}
      />

      <input
        name="pronoun"
        type="text"
        placeholder="*Pronoun"
        value={formValues.pronoun}
        onChange={onChange}
      />

      <input
        name="age"
        type="text"
        placeholder="*Age"
        value={formValues.age}
        onChange={onChange}
      />

      <input
        name="grade"
        type="text"
        placeholder="*Grade"
        value={formValues.grade}
        onChange={onChange}
      />

      <input
        name="studentEmail"
        type="text"
        placeholder="*Student Email"
        value={formValues.studentEmail}
        onChange={onChange}
      />
      <div className="test">
        <textarea
          className="create-new-student-notes"
          name="notes"
          type="text"
          placeholder="Notes (Use this space to provide any additional context like student disabilities, nicknames, etc...)"
          // value={parentInfo.notes}
          onChange={onChange}
        />
      </div>

      <div className="avatars">
        {/* isSelected avatar dictates the classname */}
        <img
          className={isSelectedAvatar(avi1)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi1}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi2)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi2}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi3)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi3}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi7)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi7}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi5)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi5}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi6)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi6}
          alt=""
        />
        <img
          className={isSelectedAvatar(avi4)}
          name="avatarURL"
          onClick={updateAvatar}
          src={avi4}
          alt=""
        />
        <button id="add-btn">+</button>
      </div>

      <p>select or upload an avatar</p>
    </div>
  );
}
