import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../../styles/StudentStyles/index.less';

const initialStudent = null;

function StudentDashboard(props) {
  const [student, setStudent] = useState(initialStudent);

  return (
    <div className="student-dashboard">
      <section className="studentdb-left-column">
        <div className="current-student-db">
          <img></img>
          <center>
            <h1>Student Name</h1>
          </center>
        </div>
        <div className="current-teacher-db">
          <div>
            <img></img>
          </div>
          <div>
            <h2>Coder Camp</h2>
            <h2>Teacher Name</h2>
          </div>
        </div>
      </section>
      <section className="studentdb-right-column">
        <section className="student-photo-tasks">
          <div className="Photo-Video-File">
            <img></img>
            <h5>Photo</h5>
            <img></img>
            <h5>Video</h5>
            <img></img>
            <h5>File</h5>
            <img></img>
            <h5>Write</h5>
            <img></img>
            <h5>Meet</h5>
          </div>
          <div className="tasks-completed">
            <h3>Tasks Completed 3/10</h3>
          </div>
        </section>
        <section className="student-stories">
          <div>
            <h2>Stories</h2>
          </div>
          <div className="student-story-card">
            <img></img>
            <h3>Teacher Name</h3>
            <h4>Coder Heroes</h4>
            <h4>9 Minutes Ago</h4>
          </div>
        </section>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentDashboard);
