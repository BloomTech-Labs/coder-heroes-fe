import axios from 'axios';
import React, { useState } from 'react';
import '../../../styles/ParentStyles/index.less';

const CreateNewStudent = props => {
  const [newStudentInfo, setNewStudentInfo] = useState();

  const handleChange = e => {
    e.preventDefault();
    setNewStudentInfo({
      ...newStudentInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(newStudentInfo);

  return (
    <div className="create-new-student-modal">
      <h2 className="create-new-student-title">Create New Student</h2>
      <div
        className="create-new-student-exit"
        onClick={() => props.setModal(false)}
      >
        X
      </div>
      <form className="create-new-student-form">
        <label>
          Student Name:
          <input type="text" name="username" onChange={handleChange}></input>
        </label>
        <br />
        <div className="create-new-student-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewStudent;
