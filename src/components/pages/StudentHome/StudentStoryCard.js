import React from 'react';
import '../../../styles/StudentStyles/index.less';
import { connect } from 'react-redux';
import { Card, Button, Form } from 'antd';
import { SendOutlined } from '@ant-design/icons';

function StudentStoryCard(prop) {
  return (
    <Card className="student-story-card">
      <div className="top-story-card">
        <section className="top-left">
          <img src="https://via.placeholder.com/50" alt="placeholder"></img>
          <div>
            <h2>Teacher Name</h2>
          </div>
        </section>
        <section className="top-right">
          <h4>9 Minutes Ago</h4>
        </section>
      </div>
      <section className="teacher-message">
        <h4>Teacher message</h4>
        <a href="www.google.com">www.google.com</a>
      </section>
      <div className="story-photo">
        <p></p>
      </div>
      <section className="student-comment">
        <div className="student-comment-info">
          <img src="https://via.placeholder.com/50" alt="placeholder"></img>
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
        <img src="https://via.placeholder.com/50" alt="placeholder"></img>
        <Form className="comment-form">
          <input type="text" placeholder="Write a comment"></input>
          <Button
            style={{
              color: 'teal',
              backgroundColor: 'white',
              border: '0px transparent',
              fontSize: '25px',
              marginLeft: '-50px',
              height: '10px',
              marginBottom: '-30px',
              marginTop: '3px',
            }}
          >
            <SendOutlined />
          </Button>
        </Form>
      </section>
    </Card>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentStoryCard);
