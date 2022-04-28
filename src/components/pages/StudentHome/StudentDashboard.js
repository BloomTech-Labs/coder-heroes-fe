import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../../styles/StudentStyles/index.less';

const initialStudent = null;

function StudentDashboard(props) {
  const [student, setStudent] = useState(initialStudent);

  return (
    <div className="student-dashboard">
      <section className="studentdb-left-column">
        <h1>Current Student</h1>
        <h2>Current Teacher</h2>
      </section>
      <section className="studentdb-right-column">
        <section className="student-photo-tasks">
          <h3>Photo-Video-File</h3>
          <h3>Tasks Completed 3/10</h3>
        </section>
        <section className="student-stories">
          <div>
            <h2>Stories</h2>
          </div>
          <div>
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
