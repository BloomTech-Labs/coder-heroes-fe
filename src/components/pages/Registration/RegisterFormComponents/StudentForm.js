import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
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
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef(null);

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

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    const fd = new FormData();
    if (selectedFile) {
      fd.append('image', selectedFile, selectedFile.name);
    }
    // Code below will be used with endpoint for storing images
    // axios.post('endpointForFileUploads', fd).then(res => {
    // setFormValues({
    //   ...formValues,
    //   [avatarURL]: res,
    // });
    // updateStudent(formValues);
    // });
  }, [selectedFile]);

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
          name="studentEmail"
          type="text"
          placeholder="*Student Email"
          value={formValues.studentEmail}
          onChange={onChange}
        />
      </label>

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
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={fileSelectedHandler}
        />
        <button id="add-btn" onClick={() => fileInput.current.click()}>
          +
        </button>
      </div>

      <p>select or upload an avatar</p>
    </div>
  );
}
