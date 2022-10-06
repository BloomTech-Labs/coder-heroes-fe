// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React, { useState } from 'react';
import { Typography, Input, Layout, Form, Button } from 'antd';
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
    <Layout className="il__top, layout-container">
      <Content className="il__top__topContent">
        <div className="il__top__topContent__container">
          <div className="il__top__topContent__main">
            <Title
              className="il__heading il__top__topContent__heading, title"
              level={2}
              style={{ color: '#3a072c', textAlign: 'center' }}
            >
              BOOK WITH US.
              <br />
              LEARN MORE THAN JUST CODE!
            </Title>
            <Form
              className="il__top__form, form-container"
              size={'large'}
              layout="inline"
              // style={{ textAlign: 'left' }}
            >
              <Input.Group compact>
                <div className="heading-container">
                  <div
                    className="sub-heading-one"
                    // style={{
                    //   color: '#3a072c',
                    //   fontSize: '21px',
                    //   fontWeight: 'bold',
                    // }}
                  >
                    Select Program
                  </div>
                  <Item name={'specialty'}>
                    <BookingProgram
                      handleRadioClick={handleRadioClick}
                      disabled={disabled}
                    />
                  </Item>

                  <div
                    className="sub-heading-two"
                    // style={{
                    //   color: '#3a072c',
                    //   fontSize: '21px',
                    //   fontWeight: 'bold',
                    //   margin: ' 20px 0 15px 0',
                    // }}
                  >
                    Select Date
                  </div>
                </div>
                <div
                  className="course-availability-container"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Item
                    className="booking-calendar-container"
                    style={{ paddingBottom: '30px', flex: '1' }}
                  >
                    <BookingCalendar
                      handleCalendarClick={handleCalendarClick}
                    />
                  </Item>

                  <Item
                    name={'availability'}
                    className="btn-drop-down-container"
                    // style={{
                    //   display: 'flex',
                    //   minWidth: '525px',
                    //   flexDirection: 'column',
                    //   flex: '1',
                    // }}
                  >
                    <div
                      className="time-zone-container"
                      // style={{
                      //   display: 'flex',
                      //   flex: '1',
                      //   flexDirection: 'column',
                      // }}
                    >
                      {!show && !render && (
                        <div
                          className="time-zone-card"
                          // style={{
                          //   backgroundColor: 'white',
                          //   borderRadius: '5px',
                          //   margin: '6px 6px 10px 6px',
                          // }}
                        >
                          <p
                            className="time-zone"
                            // style={{
                            //   color: '#6E4964',
                            //   fontSize: '16px',
                            //   margin: '6px',
                            //   padding: '3px 0',
                            //   textAlign: 'center',
                            // }}
                          >
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
                      <div
                        className="booking-card-btns-container"
                        style={{ display: 'flex' }}
                      >
                        {show && (
                          <Button
                            className="show-availability-btn"
                            type="submit"
                            // style={{
                            //   backgroundColor: '#680049',
                            //   color: 'white',
                            //   flex: '1',
                            //   margin: '150px 6px 6px 6px',
                            //   fontSize: '16px',
                            //   padding: '7px 0',
                            //   textTransform: 'uppercase',
                            // }}
                            onClick={() => {
                              if (valuesObject.program && valuesObject.date) {
                                handleAvailability();
                              }
                            }}
                          >
                            Show Availability
                          </Button>
                        )}
                        {render && (
                          <SelectedCourseDetails
                            selectedOption={selectedOption}
                          />
                        )}
                        {!show && !render && (
                          <Button
                            className="booking-card-btns"
                            type="submit"
                            // style={{
                            //   backgroundColor: '#680049',
                            //   color: 'white',
                            //   flex: '1',
                            //   margin: '150px 6px 6px 6px',
                            //   fontSize: '16px',
                            //   padding: '7px 0',
                            //   textTransform: 'uppercase',
                            // }}
                            onClick={handleSelectedCourse}
                          >
                            View Selection Details
                          </Button>
                        )}
                        {!show && render && (
                          <Button
                            className="il__top__formBtn, booking-card-btns"
                            type="submit"
                            // style={{
                            //   backgroundColor: '#680049',
                            //   color: 'white',
                            //   flex: '1',
                            //   margin: '150px 6px 6px 6px',
                            //   fontSize: '16px',
                            //   padding: '7px 0',
                            //   textTransform: 'uppercase',
                            // }}
                          >
                            Book Now
                          </Button>
                        )}
                        {!show && (
                          <Button
                            className="il__top__formBtn, booking-card-btns"
                            type="submit"
                            // style={{
                            //   backgroundColor: '#680049',
                            //   color: 'white',
                            //   flex: '1',
                            //   margin: '150px 6px 6px 6px',
                            //   fontSize: '16px',
                            //   padding: '7px 0',
                            //   textTransform: 'uppercase',
                            // }}
                            onClick={handleRefresh}
                          >
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                  </Item>
                </div>
              </Input.Group>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ParentBookingCard;
