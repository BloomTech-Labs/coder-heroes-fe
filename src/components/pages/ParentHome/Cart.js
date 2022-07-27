import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import StripeCheckoutButton from '../Stripe/StripeCheckoutButton';
// import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { timeConverter } from '../../common/timeHelpers';
import { dateConverter } from '../../common/dateHelpers';
import {
  addToCart,
  cancelCartItem,
  clearCart,
} from '../../../redux/actions/parentActions';

import '../../../styles/ParentStyles/index.less';

function Cart(props) {
  const { cart, cancelCartItem } = props; //clearCart needed in deconstructor
  const [showModal, setShowModal] = useState(false);
  //let total = cart.reduce((prev, curr) => prev + curr.price, 0);
  let total = 100; // this is hard coated so do not use ,use only the the let total=cart line
  const [product, setProduct] = useState({
    name: 'coderheroes',
    price: total,
  });
  // const history = useHistory();

  useEffect(() => {
    setProduct({ ...product, price: total });
  }, [total]); // eslint-disable-line

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
  //do not delete will use some for credit card and coarses to added to cart

  // const handleAddtoCart = booking => {
  //   addToCart(booking);
  //   setShowModal(false);
  // };

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <div>You don't have any item in cart yet!</div>
          {/* //move this total and stripCheckoutButton  code under it to bottom of return for cart */}
          {/* <div>Total: ${total}</div> */}
          {/* <StripeCheckoutButton price={total} /> */}
        </div>
      ) : (
        <div>
          {cart.map((booking, index) => {
            // use axios to get session details [axios.get(URL/api/sessions/:schedule_id)]
            // temporarily use fake Data
            const sessionDetail = {
              schedule_id: 1,
              course_id: 1,
              instructor_id: 1,
              instructor_name: 'Test003',
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
              <div className="cart-content" key={index}>
                <div>
                  <div>Course: {sessionDetail.subject}</div>
                  <div>Book for: {booking.child_name}</div>
                  <div>Instructor: {sessionDetail.instructor_name}</div>
                  <div>
                    First day of class:{' '}
                    {dateConverter(sessionDetail.start_date)}
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
                  <div>Total: ${total}</div>
                  <StripeCheckoutButton price={total} />
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
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  cancelCartItem,
  clearCart,
})(Cart);
