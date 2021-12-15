import React from 'react';
import { connect } from 'react-redux';
import { timeConverter } from '../../common/timeHelpers';
import { dateConverter } from '../../common/dateHelpers';
import { cancelCartItem } from '../../../redux/actions/parentActions';

function Cart(props) {
  const { cart, cancelCartItem } = props;
  let total = cart.reduce((prev, curr) => prev + curr.price, 0);

  const handleCancel = booking => {
    cancelCartItem(booking);
  };

  const handleCheckout = () => {
    return null;
  };

  console.log('cart', cart);

  return (
    <div>
      <h3>List in Cart</h3>
      {cart.map(booking => {
        // use axios to get session details [axios.get(URL/api/sessions/:session_id)]
        // temporarily use fake Data
        const sessionDetail = {
          session_id: 1,
          course_id: 1,
          instructor_id: 1,
          instructor_name: 'Test003',
          instructor_rating: 2,
          size: 15,
          subject: 'CS101',
          description: 'Computer Science fundamentals',
          prereqs: null,
          start_date: '2021-12-13T07:00:00.000Z',
          end_date: '2022-10-10T07:00:00.000Z',
          start_time: '17:00:00',
          end_time: '18:00:00',
          location: 'https://zoom.us/my/john123',
        };

        return (
          <div>
            <div>
              <div>Course: {sessionDetail.subject}</div>
              <div>Book for: {booking.child_name}</div>
              <div>Instructor: {sessionDetail.instructor_name}</div>
              <div>
                First day of class: {dateConverter(sessionDetail.start_date)}
              </div>
              <div>
                Last day of class: {dateConverter(sessionDetail.end_date)}
              </div>
              <div>
                Time: {timeConverter(sessionDetail.start_time)} -{' '}
                {timeConverter(sessionDetail.end_time)}
              </div>
              <div>Location: {sessionDetail.subject}</div>
            </div>
            <div>
              <button onClick={() => handleCancel(booking)}>
                Cancel booking
              </button>
              <button onClick={handleCheckout}>Proceed to checkout</button>
            </div>
          </div>
        );
      })}
      <div>Total: {total}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps, { cancelCartItem })(Cart);
