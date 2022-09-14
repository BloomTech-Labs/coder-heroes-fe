import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteInstructor,
  updateInstructorInfo,
} from './../../../redux/actions/adminActions';
//import '.css'
//import axiosWithAuth from '../../../utils/axiosWithAuth';

const InstructorEditor = props => {
  const [name, setName] = useState(props.instructor.name);
  const [email, setEmail] = useState(props.instructor.email);
  const [phone_number, setPhone_number] = useState(
    props.instructor.phone_number
  );
  const [location, setLocation] = useState(props.instructor.location);
  const [technical_experience, setTechnical_experience] = useState(
    props.instructor.technical_experience
  );
  const [notes, setNotes] = useState(props.instructor.notes);

  //function putInstructorInfo(name, email, phone_number, location, technical_experience, notes){
  //     axiosWithAuth.put('/:instructor_id')
  //     .then(resp => {
  //         dispatch({
  //                  type: UPDATE_INSTRUCTOR_INFO,
  //                 payload: {name, email, phone_number, location, technical_experience, notes}
  //      })
  //       })
  //   }

  return (
    <div className="edit instructor">
      <h2>Edit Instructor</h2>
      {
        <div className="instructor editor">
          <div>
            <h3>
              Name:{' '}
              <input
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </h3>
            <p>
              Email:{' '}
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </p>
            <p>
              Phone Number:{' '}
              <input
                value={phone_number}
                onChange={e => {
                  setPhone_number(e.target.value);
                }}
              />
            </p>
            <p>
              Location:{' '}
              <input
                value={location}
                onChange={e => {
                  setLocation(e.target.value);
                }}
              />
            </p>
            <p>
              Technical Experience:{' '}
              <input
                value={technical_experience}
                onChange={e => {
                  setTechnical_experience(e.target.value);
                }}
              />
            </p>
            <p>
              Notes:{' '}
              <input
                value={notes}
                onChange={e => {
                  setNotes(e.target.value);
                }}
              />
            </p>
          </div>
          <div>
            <button
              onClick={() =>
                updateInstructorInfo(props.instructor.instructor_id)
              }
            >
              Submit
            </button>
            <button
              onClick={() => deleteInstructor(props.instructor.instructor_id)}
            >
              Delete
            </button>
          </div>
        </div>
      }
      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(InstructorEditor);
