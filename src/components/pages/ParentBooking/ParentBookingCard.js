// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React, { useState } from 'react';
import { Typography, Layout, Form, Button, Col, Row } from 'antd';
import { parentDummyData } from '../../../parentDummyData';
import BookingCalendar from './BookingCalendar';
import PreferredCourseOptions from './PreferredCourseOptions.js';
import '../../../styles/ParentStyles/booking.less';
import BookingProgram from './BookingProgram';
import SelectedCourseDetails from './SelectedCourseDetails';

const courseDetails = {
  instructor_name: '',
  size: '',
  subject: '',
  description: '',
  start_date: '',
  end_date: '',
  start_time: '',
  end_time: '',
  price: '',
};

const ParentBookingCard = () => {
  const { Content } = Layout;
  const { Item } = Form;
  const { Title } = Typography;
  const [searchResults, setSearchResults] = useState([]);

  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [render, setRender] = useState(false);
  const [selectedOption, setSelectedOption] = useState(courseDetails);

  let valuesObject = {};

  let newArray = [];
  let resultArray = [];

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleRadioClick = e => {
    let program = e.target.value;
    valuesObject.program = program;
  };

  const handleCalendarClick = value => {
    let date = value.format('MM/DD/YYYY');
    valuesObject.date = date;
  };

  const handleAvailability = e => {
    newArray = parentDummyData.availableCourses.filter(course => {
      let programDate = course.start_date;
      let selectedDate = valuesObject.date;
      let programMonth = programDate.substring(0, 2);
      let selectedMonth = selectedDate.substring(0, 2);
      let programYear = programDate.substring(6);
      let selectedYear = selectedDate.substring(6);

      return parseInt(programMonth) >= parseInt(selectedMonth) &&
        programYear === selectedYear
        ? course
        : null;
    });

    resultArray = newArray.filter(
      course => course.subject === valuesObject.program
    );
    setSearchResults(resultArray);
    setSelectedOption(resultArray[0]);
    if (valuesObject.program && valuesObject.date) {
      setShow(!show);
    }

    toggleDisabled();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSelectedCourse = () => {
    setRender(!render);
  };

  const updateSelection = (inputName, inputValue) => {
    setSelectedOption({ ...selectedOption, [inputName]: inputValue });
  };

  return (
    <Layout>
      <Row>
        <Col>
          <Content className="main-container">
            <Col span={24}>
              <Title className="title">
                <p>
                  BOOK WITH US.
                  <br />
                  LEARN MORE THAN JUST CODE!
                </p>
              </Title>
            </Col>

            <Form className="form-container" size={'large'} layout="inline">
              <Col span={24}>
                <div>
                  <div className="sub-heading">Select Program</div>
                  <Item name={'specialty'}>
                    <BookingProgram
                      handleRadioClick={handleRadioClick}
                      disabled={disabled}
                    />
                  </Item>

                  <div className="sub-heading">Select Date</div>
                </div>
              </Col>

              <div className="course-availability-container">
                <Col span={12}>
                  <Item className="booking-calendar-container">
                    <BookingCalendar
                      handleCalendarClick={handleCalendarClick}
                    />
                  </Item>
                </Col>

                <Col span={12}>
                  <Item
                    name={'availability'}
                    className="btn-drop-down-container"
                  >
                    <div className="booking-card-container">
                      <Col span={24}>
                        {show && (
                          <Button
                            className="show-availability-btn"
                            type="submit"
                            onClick={() => {
                              if (valuesObject.program && valuesObject.date) {
                                handleAvailability();
                              }
                            }}
                          >
                            <span>Show Availability</span>
                          </Button>
                        )}
                      </Col>

                      <div className="booking-card-btns">
                        <Col span={12}>
                          {!show && !render && (
                            <Button
                              className="booking-card-btn"
                              type="submit"
                              onClick={handleSelectedCourse}
                            >
                              <span>View Selection Details</span>
                            </Button>
                          )}
                        </Col>

                        <Col span={12}>
                          {!show && render && (
                            <Button className="booking-card-btn" type="submit">
                              <span>Book Now</span>
                            </Button>
                          )}
                        </Col>

                        <Col span={12}>
                          {!show && (
                            <Button
                              className="booking-card-btn"
                              type="submit"
                              onClick={handleRefresh}
                            >
                              <span>Edit</span>
                            </Button>
                          )}
                        </Col>
                      </div>

                      <Col span={24}>
                        {render && (
                          <SelectedCourseDetails
                            selectedOption={selectedOption}
                          />
                        )}
                      </Col>
                    </div>

                    <Col span={24}>
                      {!show && !render && (
                        <PreferredCourseOptions
                          updateSelection={updateSelection}
                          searchResults={searchResults}
                        />
                      )}
                    </Col>

                    <Col span={24}>
                      <div className="time-zone-container">
                        {!show && !render && (
                          <div className="time-zone-card">
                            <p className="time-zone">
                              All times are in Central Standard Time (US &
                              Canada)
                            </p>
                          </div>
                        )}
                      </div>
                    </Col>

                    {/* </div> */}
                  </Item>
                </Col>
              </div>
            </Form>
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default ParentBookingCard;
