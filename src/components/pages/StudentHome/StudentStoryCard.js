import React, { useState } from 'react';
import '../../../styles/StudentStyles/index.less';
import { connect } from 'react-redux';
import { Card } from 'antd';

function StudentStoryCard(prop) {
  return (
    <Card className="student-story-card">
      <div className="top-story-card">
        <section className="top-left">
          <img src="https://via.placeholder.com/50" alt="placeholder"></img>
          <div>
            <h2>Teacher Name</h2>
            <h4>Coder Heroes</h4>
          </div>
        </section>
        <section className="top-right">
          <h4>9 Minutes Ago</h4>
        </section>
      </div>
      <section className="teacher-message">
        <h4>Teacher message</h4>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </a>
      </section>
      <section className="story-photo">
        <div></div>
      </section>
      <section className="student-comment">
        <div className="student-comment-info">
          <img src="https://via.placeholder.com/50"></img>
          <div>
            <h4>Student Name</h4>
            <p>Student Message</p>
          </div>
        </div>
        <div className="comment-minute">
          <h4>4 minutes ago</h4>
        </div>
      </section>
      <section className="student-send-comment">
        <img src="https://via.placeholder.com/50"></img>
        <form>
          <input type="text"></input>
          <button>Enter</button>
        </form>
      </section>
    </Card>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentStoryCard);
