// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React, { useEffect, useState, useRef } from 'react';
import { Typography, Input, Layout, Form, Radio } from 'antd';
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
  // course_id: 1,
  // instructor_id: 1,
  // instructor_name: 'Test003',
  // size: 15,
  // subject: 'CS101',
  // description: 'Computer Science fundamentals',
  // prereqs: [],
  // start_date: '01/19/2022',
  // end_date: '02/10/2022',
  // start_time: '17:00:00',
  // end_time: '18:00:00',
  // location: 'https://zoom.us/my/john123',
  // price: 1000,

  const { Content } = Layout;
  const { Item } = Form;
  const { Title } = Typography;
  const [searchResults, setSearchResults] = useState([]);

  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [render, setRender] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [selectedOption, setSelectedOption] = useState(courseDetails);

  let valuesObject = {};
  let program;
  let date = 'no date selected';
  let newArray = [];
  let resultArray = [];

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleRadioClick = e => {
    program = e.target.value;
    valuesObject.program = program;
  };

  const handleCalendarClick = value => {
    date = value.format('MM/DD/YYYY');
    valuesObject.date = date;
  };

  const handleAvailability = e => {
    e.preventDefault();

    newArray = parentDummyData.availableCourses.filter((course, index) => {
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
    resultArray.unshift('-- Select a Course --');
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

  const handleSelecteCourse = () => {
    setRender(!render);
  };

  const updateSelection = (inputName, inputValue) => {
    setSelectedOption({ ...selectedOption, [inputName]: inputValue });
  };

  return (
    <Layout className="il__top">
      <Content className="il__top__topContent">
        <div className="il__top__topContent__container">
          <div className="il__top__topContent__main">
            <Title
              className="il__heading il__top__topContent__heading"
              level={2}
              style={{ color: '#3a072c', textAlign: 'center' }}
            >
              BOOK WITH US.
              <br />
              LEARN MORE THAN JUST CODE!
            </Title>
            <Form
              className="il__top__form"
              size={'large'}
              layout="inline"
              style={{ textAlign: 'left' }}
            >
              <Input.Group compact>
                <div>
                  <div
                    style={{
                      color: '#3a072c',
                      fontSize: '21px',
                      fontWeight: 'bold',
                    }}
                  >
                    Select Program
                  </div>
                  <Item name={'speciality'}>
                    <BookingProgram
                      handleRadioClick={handleRadioClick}
                      disabled={disabled}
                    />
                  </Item>

                  <div
                    style={{
                      color: '#3a072c',
                      fontSize: '21px',
                      fontWeight: 'bold',
                      margin: ' 20px 0 15px 0',
                    }}
                  >
                    Select Date
                    {/* <div
                      // placeholder="no date selected"
                      // readOnly="readonly"
                      // value={date}
                      style={{
                        marginLeft: '30px',
                        border: '2px solid black',
                        height: '30px',
                        margin: '20px',
                        maxWidth: '200px',
                      }}
                    >
                      {date}
                    </div> */}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Item style={{ paddingBottom: '30px', flex: '1' }}>
                    <BookingCalendar
                      handleCalendarClick={handleCalendarClick}
                    />
                  </Item>

                  <Item
                    name={'availability'}
                    style={{
                      display: 'flex',
                      minWidth: '525px',
                      flexDirection: 'column',
                      flex: '1',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column',
                      }}
                    >
                      {!show && !render && (
                        <div
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            margin: '6px 6px 10px 6px',
                          }}
                        >
                          <p
                            style={{
                              color: '#6E4964',
                              fontSize: '16px',
                              margin: '6px',
                              padding: '3px 0',
                              textAlign: 'center',
                            }}
                          >
                            All times are in Central Standard Time (US & Canada)
                          </p>
                        </div>
                      )}

                      {!show && !render && (
                        <PreferredCourseOptions
                          updateSelection={updateSelection}
                          searchResults={searchResults}
                          selectedOption={selectedOption}
                        />
                      )}
                      <div style={{ display: 'flex' }}>
                        {show && !clickable && (
                          <button
                            className="il__top__formBtn"
                            type="submit"
                            style={{
                              backgroundColor: '#680049',
                              color: 'white',
                              flex: '1',
                              margin: '150px 6px 6px 6px',
                              fontSize: '16px',
                              padding: '7px 0',
                              textTransform: 'uppercase',
                            }}
                            onClick={handleAvailability}
                          >
                            Show Availability
                          </button>
                        )}
                        {render && (
                          <SelectedCourseDetails
                            selectedOption={selectedOption}
                          />
                        )}
                        {!show && !render && (
                          <button
                            className="il__top__formBtn"
                            type="submit"
                            style={{
                              backgroundColor: '#680049',
                              color: 'white',
                              flex: '1',
                              margin: '150px 6px 6px 6px',
                              fontSize: '16px',
                              padding: '7px 0',
                              textTransform: 'uppercase',
                            }}
                            onClick={handleSelecteCourse}
                          >
                            View Selection Details
                          </button>
                        )}
                        {!show && render && (
                          <button
                            className="il__top__formBtn"
                            type="submit"
                            style={{
                              backgroundColor: '#680049',
                              color: 'white',
                              flex: '1',
                              margin: '150px 6px 6px 6px',
                              fontSize: '16px',
                              padding: '7px 0',
                              textTransform: 'uppercase',
                            }}
                          >
                            Book Now
                          </button>
                        )}
                        {!show && (
                          <button
                            className="il__top__formBtn"
                            type="submit"
                            style={{
                              backgroundColor: '#680049',
                              color: 'white',
                              flex: '1',
                              margin: '150px 6px 6px 6px',
                              fontSize: '16px',
                              padding: '7px 0',
                              textTransform: 'uppercase',
                            }}
                            onClick={handleRefresh}
                          >
                            Edit
                          </button>
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
