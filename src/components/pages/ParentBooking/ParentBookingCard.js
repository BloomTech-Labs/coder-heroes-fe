// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW
import React from 'react';
import { connect } from 'react-redux';
import { Typography, Input, Select, Layout, Form } from 'antd';
import { dateConverter } from '../../common/dateHelpers';
import { timeConverter } from '../../common/timeHelpers';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';
import { addToCart } from '../../../redux/actions/parentActions';
import { dummyData } from '../../../dummyData';

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
  const { Option } = Select;
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
            >
              SEARCH FOR AVAILABLE COURSES
            </Title>
            <Form className="il__top__form" size={'large'} layout="inline">
              <Input.Group compact>
                <Item name={'speciality'}>
                  <Select
                    style={{ border: '1px solid #9DA7AB' }}
                    placeholder="Choose a Program"
                    allowClear
                  >
                    <Option value="JavaScriptB">JavaScriptB</Option>
                    <Option value="'CS101'">CS101</Option>
                  </Select>
                </Item>
                <Item name={'search'} noStyle>
                  <Input
                    type="date"
                    className="il__top__input"
                    style={{ border: '1px solid #9DA7AB' }}
                    placeholder="Start Date"
                    allowClear
                    name="search"
                    // <Select>
                    //   <Option> <CalendarCard/></Option>
                    // </Select>
                  />
                </Item>
                <Item name={'availability'}>
                  <Select
                    style={{ border: '1px solid #9DA7AB' }}
                    placeholder="Preferred Time of Day"
                    allowClear
                  >
                    <Option value="morning">Morning</Option>
                    <Option value="afternoon">Afternoon</Option>
                    <Option value="night">Night</Option>
                    <Option value="weekends">Weekends</Option>
                  </Select>
                </Item>
                <button
                  className="il__top__formBtn"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  SEARCH
                </button>
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
