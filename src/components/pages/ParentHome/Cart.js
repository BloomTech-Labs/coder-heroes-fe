import React, { useState } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { timeConverter } from '../../common/timeHelpers';
import { dateConverter } from '../../common/dateHelpers';
import { cancelCartItem } from '../../../redux/actions/parentActions';

const dummy = [
  { parent_id: 1, child_id: 1, session_id: 1, price: 1000 },
  { parent_id: 1, child_id: 1, session_id: 25, price: 1050 },
  { parent_id: 1, child_id: 2, session_id: 45, price: 900 },
  { parent_id: 1, child_id: 3, session_id: 17, price: 1200 },
];

function Cart(props) {
  const { cancelCartItem } = props;
  // this is for next cohort. we should use ParentReducer to get cart array instead of dummyData
  // const { cart, cancelCartItem } = props;
  const cart = dummy;
  const [showModal, setShowModal] = useState(false);
  let total = cart.reduce((prev, curr) => prev + curr.price, 0);
  const [product, setProduct] = useState({
    name: 'coderheroes',
    price: total,
  });
  const history = useHistory();

  const handleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCancel = booking => {
    cancelCartItem(booking);
    setShowModal(false);
  };

  const makeToken = token => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-type': 'application/json',
    };

    return fetch(`http://localhost5000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then(res => {
        // unused variable status is for next cohort. we can use status to proceed the enrollment process in BE
        // const { status } = res;
        history.push('/payment-success');
      })
      .catch(err => console.log(err));
  };

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
              <Button onClick={() => handleModal()}>Cancel booking</Button>
            </div>
            {showModal ? (
              <Modal
                className="events capital"
                title={'modal'}
                visible={true}
                onCancel={closeModal}
                footer={[
                  <Button
                    key="yes"
                    type="primary"
                    onClick={() => handleCancel(booking)}
                  >
                    Yes
                  </Button>,
                  <Button key="no" onClick={closeModal}>
                    No
                  </Button>,
                ]}
              >
                Are you sure you want to remove this booking?
              </Modal>
            ) : null}
          </div>
        );
      })}
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makeToken}
        name="Let's Finish Enrollment"
        amount={product.price * 100}
        billingAddress
        zipCode
        locale="auto"
      >
        <button style={{ backgroundColor: '#06d6a0' }}>CHECK OUT</button>
      </StripeCheckout>
      <div>Total: {total}</div>
    </div>
  );
}

export default connect(null, { cancelCartItem })(Cart);
