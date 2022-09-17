// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Typography, Input, Select, Layout, Form } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';
import { addToCart } from '../../../redux/actions/parentActions';
// import { dummyData } from '../../../dummyData';
import { parentDummyData } from '../../../parentDummyData';
import BookingCalendar from './BookingCalendar';
import BookingTimeBtn from './BookingTimeBtn';
import '../../../styles/ParentStyles/booking.less';

// console.log(Times);

const ParentBookingCard = props => {
  const {
    course_name,
    course_description,
    start_date,
    end_date,
    start_time,
    end_time,
    number_of_sessions,
    location,
    days_of_week,
    size,
    min_age,
    max_age,
  } = props.booking;

  const { Content } = Layout;
  const { addToCart } = props;
  const { Item } = Form;
  const { button } = Select;
  const { Title } = Typography;

  const { authState } = useOktaAuth();
  const { idToken } = authState;

  const handleClick = e => {
    axiosWithAuth(idToken)
      .post()
      .then(res => console.log(res)) // TODO: Let's perform some action with this result.
      .catch(err => console.log(`message: ${err.message}`));
  };

  // const data = [
  //   { title: 'student name', text: child_name },
  //   { title: 'course', text: subject },
  //   { title: 'description', text: description },
  //   { title: 'first day of class', text: dateConverter(start_date) },
  //   { title: 'last day of class', text: dateConverter(end_date) },
  //   {
  //     title: 'time',
  //     text: `${timeConverter(start_time)} - ${timeConverter(end_time)}`,
  //   },
  //   { title: 'location', text: location },
  //   { title: 'instructor', text: instructor_name },
  //   { title: 'class size', text: size },
  // ];

  // const [availableTime, setAvailableTime] = useState(Times);
  const Times = [
    ...new Set(parentDummyData.availableCourses.map(time => time.start_time)),
  ];

  const filterAvailableTimes = start_time => {
    const filteredTimes = parentDummyData.availableCourses.filter(
      course => course.start_time === start_time
    );
    return filteredTimes;
  };
  const handleAddCourse = booking => {
    addToCart(booking);
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
            <Form className="il__top__form" size={'large'} layout="inline">
              <Input.Group
                compact
                // style={{ display: 'flex', flexDirection: 'column' }}
              >
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
                    <Select
                      style={{
                        border: '1px solid #9DA7AB',
                        margin: '5px 0 20px 0',
                      }}
                      placeholder="Choose a Program"
                      allowClear
                    >
                      <button value="JavaScriptB">JavaScriptB</button>
                      <button value="'CS101'">CS101</button>
                    </Select>
                  </Item>

                  <div
                    style={{
                      color: '#3a072c',
                      fontSize: '21px',
                      fontWeight: 'bold',
                      margin: ' 20px 0 15px 0',
                    }}
                  >
                    Select Time
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Item style={{ flex: '3', paddingBottom: '30px' }}>
                    <BookingCalendar
                      style={{
                        width: '300px',
                        border: '1px solid #f0f0f0',
                        borderRadius: '2px',
                      }}
                    />
                  </Item>

                  <Item
                    name={'availability'}
                    style={{
                      display: 'flex',
                      // flexWrap: 'wrap',
                      minWidth: '450px',
                      flexDirection: 'column',
                      flex: '1',
                    }}
                  >
                    <BookingTimeBtn
                      filterAvailableTimes={filterAvailableTimes}
                      availableTime={Times}
                    />

                    {/* <div
                      style={{
                        display: 'flex',
                        // flexWrap: 'wrap',
                        justifyContent: 'space-around',
                      }}
                      >
                     <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        9:00 AM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        10:00 AM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        11:00 AM
                      </button> 
                     </div> 
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                      }}
                    >
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        12:00 PM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        1:00 PM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        2:00 PM
                      </button>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                      }}
                    >
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        3:00 PM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        4:00 PM
                      </button>
                      <button
                        style={{
                          borderRadius: '10px',
                          padding: '10px 2px',
                          margin: '6px',
                          flex: '1',
                          backgroundColor: '#3BC9B5',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#680049',
                        }}
                      >
                        5:00 PM
                      </button>
                    </div> */}
                    <div
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        margin: '6px',
                      }}
                    >
                      <p
                        style={{
                          color: '#6E4964',
                          fontSize: '16px',
                          margin: '6px',
                          padding: '7px 0',
                          textAlign: 'center',
                        }}
                      >
                        All times are in Central Standard Time (US & Canada)
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flex: '1',
                      }}
                    >
                      <button
                        className="il__top__formBtn"
                        type="submit"
                        style={{
                          backgroundColor: '#680049',
                          color: 'white',
                          flex: '1',
                          margin: '6px',
                          fontSize: '16px',
                          padding: '7px 0',
                        }}
                        // onClick={handleSubmit}
                      >
                        CONTINUE BOOKING
                      </button>
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

const mapStateToProps = state => ({
  cart: state.parentReducer.cart,
  bookings: state.parentReducer.bookings,
});

export default connect(mapStateToProps, {
  addToCart,
})(ParentBookingCard);
