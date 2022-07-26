import React, { useState, useCallback } from 'react';

// Component Imports
import { AdvancedSearchModal } from './AdvancedSearchModal';

// Design Imports
import { Card, Button } from 'antd';
import '../../../styles/BookingStyles/CourseDescriptionStyles.less';
import avatar from '../../../styles/BookingStyles/assets/Avatar07.png';

//const { Content } = Layout;

function CourseDescriptionComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="course-page">
      <div className={modalOpen ? 'modal-open' : 'modal-closed'}>
        <div className="modal-component-container">
          <AdvancedSearchModal
            className="modal-component"
            toggleModal={toggleModal}
          />
        </div>
      </div>
      <div className="page-title">
        <img className="image" src={avatar} alt="Student" />

        <div className="title-container">
          <h1>CODERHEROES PROGAMS</h1>
        </div>
      </div>
      <div className="search-bar">
        <form>
          <input placeholder="Search"></input>
          <div
            className="advanced-search"
            id="advanced-search"
            onClick={toggleModal}
          >
            Advanced Search
          </div>
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
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <h3>Courses:</h3>

              <li>Intro to JavaScript</li>
              <li>Intro to CSS</li>
            </div>
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
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <h3>Courses:</h3>

              <li>Intro to JavaScript</li>
              <li>Intro to HTML</li>
            </div>
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
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <h3>Courses:</h3>

              <li>Intro to JavaScript</li>
              <li>Intro to CSS</li>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CourseDescriptionComponent;
