import React from 'react';
import { Card, Button } from 'antd';
import '../../../styles/BookingStyles/CourseDescriptionStyles.less';
import avatar from '../../../styles/BookingStyles/assets/Avatar07.png';

//const { Content } = Layout;

function CourseDescriptionComponent() {
  return (
    <div className="course-page">
      <div className="page-title">
        <img className="image" src={avatar} alt="Student" />

        <div className="title-container">
          <h1>COURSE DESCRIPTIONS</h1>
        </div>
      </div>
      <div className="search-bar">
        <form>
          <input placeholder="Search"></input>
        </form>
      </div>
      <div className="card-container">
        <Card
          className="description-card"
          title="CoderYoga"
          headStyle={{
            backgroundColor: '#9FB222',
            height: '129px',
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '22px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20px 20px 0 0',
          }}
        >
          <div className="card-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <Button className="bttn" type="primary">
              Register Now
            </Button>
          </div>
        </Card>
        <Card
          className="description-card"
          title="CodeSitters"
          headStyle={{
            backgroundColor: '#FEAD2A',
            height: '129px',
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '22px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20px 20px 0 0',
          }}
        >
          <div className="card-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <Button className="bttn" type="primary">
              Register Now
            </Button>
          </div>
        </Card>
        <Card
          className="description-card"
          title="CoderCamp"
          headStyle={{
            backgroundColor: '#B9E3D0',
            height: '129px',
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '22px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20px 20px 0 0',
          }}
        >
          <div className="card-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <Button className="bttn" type="primary">
              Register Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CourseDescriptionComponent;