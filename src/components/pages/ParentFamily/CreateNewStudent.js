import React, { useState } from 'react';
import '../../../styles/ParentStyles/index.less';

const CreateNewStudent = props => {
  const [checked, setChecked] = useState([]);

  const handleChange = e => {
    // setChecked({checked: e.target.checked});
    const isChecked = e.target.checked;
    if (isChecked) {
      setChecked({ checked: [...checked, e.target.value] });
    }
  };

  return (
    <div className="create-new-student-modal">
      <h2 className="create-new-student-title">Create New Student</h2>
      <div className="exit" onClick={() => props.setModal(false)}>
        X
      </div>
      <form className="create-new-student-form">
        <div>Student Name: </div>
        <label>
          <input type="text" name="student-name"></input>
        </label>
        <br />
        <div>Email Address: </div>
        <label>
          <input type="text" name="email-address"></input>
        </label>
        <br />
        <div>Add Prerequisites:</div>
        <br />
        <label>
          HTML
          <input
            type="checkbox"
            name="prerequisites"
            value="html"
            checked={checked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CSS
          <input
            type="checkbox"
            name="prerequisites"
            value="css"
            checked={checked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          JavaScript
          <input
            type="checkbox"
            name="prerequisites"
            value="javascript"
            checked={checked}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewStudent;
