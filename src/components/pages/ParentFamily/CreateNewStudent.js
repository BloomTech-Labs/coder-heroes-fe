import React, {useState} from 'react';
import '../../../styles/ParentStyles/index.less';
import { CloseOutlined } from '@ant-design/icons';


const CreateNewStudent = props => {
  const [newStudentInfo, setNewStudentInfo] = useState();
  // const [checked, setChecked] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    setNewStudentInfo({
      ...newStudentInfo,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChange = (id, e) => {
  //     e.preventDefault();
  //     const copyChecked = [...checked];
  //     const indexOfId = copyChecked.indexOf(id);
  //     console.log('INDEXOFID', indexOfId);
  //     if(indexOfId === -1){
  //         copyChecked.push(id);
  //     }else{
  //         copyChecked.splice(indexOfId, 1);
  //     }
  //     console.log('COPYCHECKED', copyChecked);
  //     setChecked(copyChecked);
  // };

  return (
    <div className="create-new-student-modal">
      <h2 className="create-new-student-title">Create New Student</h2>
      <CloseOutlined className="exit" onClick={() => props.setModal(false)} />
      <form className="create-new-student-form">
        <label>
          Student Name:
          <input type="text" name="username" onChange={handleChange}></input>
        </label>
        <br />
        <label>
          Email Address:
          <input type="text" name="email-address"></input>
        </label>
        <br />
        <div>Add Prerequisites:</div>
        <br />
        <label>
          HTML
          <input
            id={1}
            type="checkbox"
            name="prerequisites"
            value="html"
            // checked={checked.includes(checked.id)}
            // onChange={(e) => handleChange(checked.id, e)}
          />
        </label>
        <br />
        <label>
          CSS
          <input
            id={2}
            type="checkbox"
            name="prerequisites"
            value="css"
            // checked={checked.includes(checked.id)}
            // onChange={(e) => handleChange(checked.id, e)}
          />
        </label>
        <br />
        <label>
          JavaScript
          <input
            id={3}
            type="checkbox"
            name="prerequisites"
            value="javascript"
            // checked={checked.includes(checked.id)}
            // onChange={(e) => handleChange(checked.id, e)}
          />
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
