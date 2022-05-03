import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../../styles/StudentStyles/index.less';
import {
  CameraOutlined,
  VideoCameraOutlined,
  PaperClipOutlined,
  FontSizeOutlined,
  TeamOutlined,
  LineOutlined,
} from '@ant-design/icons';
import StudentStoryCard from './StudentStoryCard';

const initialStudent = null;

function StudentDashboard(props) {
  // const [student, setStudent] = useState(initialStudent);

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
            <div className="tasks-div">
              <h3>Tasks Completed</h3>
              <h3 className="tasks-numbers">3/10</h3>
            </div>
            <div className="pipe" style={{ fontSize: '25px' }}>
              <LineOutlined className="rotate-line" />
            </div>
            <div className="tasks-div">
              <h3>New Stories</h3>
              <h3 className="tasks-numbers">2</h3>
            </div>
          </div>
        </section>
        <section className="student-stories">
          <div>
            <h1>Stories</h1>
          </div>
          <StudentStoryCard />
        </section>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentDashboard);
