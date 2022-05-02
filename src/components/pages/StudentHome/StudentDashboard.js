import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../../styles/StudentStyles/index.less';
import {
  CameraOutlined,
  VideoCameraOutlined,
  PaperClipOutlined,
  FontSizeOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const initialStudent = null;

function StudentDashboard(props) {
  const [student, setStudent] = useState(initialStudent);

  return (
    <div className="student-dashboard">
      <section className="studentdb-left-column">
        <div className="current-student-db">
          <center>
            <img src="https://via.placeholder.com/100" alt="placeholder"></img>
            <h1>Student Name</h1>
          </center>
        </div>
        <div className="current-teacher-db">
          <div>
            <img src="https://via.placeholder.com/50" alt="placeholder"></img>
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
            <div>
              <div style={{ fontSize: '30px' }}>
                <CameraOutlined />
              </div>
              <h5>Photo</h5>
            </div>
            <div>
              <div style={{ fontSize: '30px' }}>
                <VideoCameraOutlined />
              </div>
              <h5>Video</h5>
            </div>
            <div>
              <div style={{ fontSize: '30px' }}>
                <PaperClipOutlined />
              </div>
              <h5>File</h5>
            </div>
            <div>
              <div style={{ fontSize: '30px' }}>
                <FontSizeOutlined />
              </div>
              <h5>Write</h5>
            </div>
            <div>
              <div style={{ fontSize: '30px' }}>
                <TeamOutlined />
              </div>
              <h5>Meet</h5>
            </div>
          </div>
          <div className="tasks-completed">
            <h3>Tasks Completed 3/10</h3>
            <h3> || </h3>
            <h3>New Stories 2</h3>
          </div>
        </section>
        <section className="student-stories">
          <div>
            <h2>Stories</h2>
          </div>
          <div className="student-story-card">
            <img src="https://via.placeholder.com/50" alt="placeholder"></img>
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
