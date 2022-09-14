import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getInstructors,
  deleteInstructor,
} from './../../../redux/actions/adminActions';
import InstructorInfoEditor from './InstructorInfoEditor';
//import '.css'

const InstructorCards = props => {
  const { instructors } = props;
  const [currentInstructorId, setCurrentInstructorId] = useState(null);

  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="cards">
      <h2>Instructors</h2>
      {instructors.map(instructor => {
        return (
          <div className="card" key={instructor.instructor_id}>
            <div>
              <h3>Name: {instructor.name}</h3>
              <p>Email: {instructor.email}</p>
              <p>Phone Number: {instructor.phone_number}</p>
              <p>Location: {instructor.location}</p>
              <p>Technical Experience: {instructor.technical_experience}</p>
              <p>Notes: {instructor.notes}</p>
            </div>
            <div>
              <button onClick={() => setCurrentInstructorId(instructor)}>
                Edit
              </button>
              <button
                onClick={() => deleteInstructor(instructor.instructor_id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div>
        {currentInstructorId && (
          <InstructorInfoEditor instructor={currentInstructorId} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    instructors: state.instructor,
  };
};

export default connect(mapStateToProps)(InstructorCards);
