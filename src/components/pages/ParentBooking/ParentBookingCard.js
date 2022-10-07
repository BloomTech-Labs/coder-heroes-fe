// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React, { useState } from 'react';
import { Typography, Layout, Form, Button } from 'antd';
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
      <Content className="main-container">
        <Title className="title">
          <p>
            BOOK WITH US.
            <br />
            LEARN MORE THAN JUST CODE!
          </p>
        </Title>
        <Form className="form-container" size={'large'} layout="inline">
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
          <div className="course-availability-container">
            <Item className="booking-calendar-container">
              <BookingCalendar handleCalendarClick={handleCalendarClick} />
            </Item>

            <Item name={'availability'} className="btn-drop-down-container">
              <div className="time-zone-container">
                {!show && !render && (
                  <div className="time-zone-card">
                    <p className="time-zone">
                      All times are in Central Standard Time (US & Canada)
                    </p>
                  </div>
                )}

                {!show && !render && (
                  <PreferredCourseOptions
                    updateSelection={updateSelection}
                    searchResults={searchResults}
                  />
                )}
                <div className="booking-card-container">
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
                      <p>Show Availability</p>
                    </Button>
                  )}
                  {render && (
                    <SelectedCourseDetails selectedOption={selectedOption} />
                  )}
                  <div className="booking-card-btns">
                    {!show && !render && (
                      <Button
                        className="booking-card-btn"
                        type="submit"
                        onClick={handleSelectedCourse}
                      >
                        <p>View Selection Details</p>
                      </Button>
                    )}
                    {!show && render && (
                      <Button className="booking-card-btn" type="submit">
                        <p>Book Now</p>
                      </Button>
                    )}
                    {!show && (
                      <Button
                        className="booking-card-btn"
                        type="submit"
                        onClick={handleRefresh}
                      >
                        <p>Edit</p>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Item>
          </div>
        </Form>
      </Content>
    </Layout>
  );
};

export default ParentBookingCard;
