import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addToCart } from '../../../redux/actions/parentActions';

function ChildForm(props) {
  const {
    schedule_id,
    price,
    parentProfile,
    bookings,
    cart,
    addToCart,
    setActiveModal,
  } = props;
  const [booking, setBooking] = useState({
    parent_id: '',
    child_id: '0',
    schedule_id: '',
    child_name: '',
    price: 0,
  });
  const [err, setErr] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = e => {
    setErr('');
    const child = parentProfile.children.find(
      item => item.child_id === parseInt(e.target.value)
    );
    setBooking({
      ...booking,
      parent_id: parentProfile.parent_id,
      child_id: parseInt(e.target.value),
      child_name: child.child_name,
      schedule_id: schedule_id,
      price: price,
    });
  };

  const book = e => {
    e.preventDefault();
    const isAlreadyBooked = bookings.find(item => {
      return (
        item.child_id === booking.child_id &&
        item.schedule_id === booking.schedule_id
      );
    });
    const isAlreadyInCart = cart.find(item => {
      return (
        item.child_id === booking.child_id &&
        item.schedule_id === booking.schedule_id
      );
    });
    // check if the child name was not selected
    // check if the parent already booked this class for this child, or already in cart
    // if not, dispactch action to set state cart
    if (booking.child_id === '0') {
      setErr('please select a child');
    } else if (isAlreadyBooked) {
      setErr(`You already booked this class for ${booking.child_name}`);
    } else if (isAlreadyInCart) {
      setErr(`This course for ${booking.child_name} already is in cart`);
    } else {
      addToCart(booking);
      setSuccessMsg('the course has been added to cart');
      setTimeout(() => {
        setActiveModal(0);
      }, 2000);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="child">choose child name</label> <br />
        <select id="child" onChange={handleChange} value={booking.child_id}>
          <option value="0">--Select One--</option>
          {parentProfile.children.map(child => {
            return <option value={child.child_id}>{child.child_name}</option>;
          })}
        </select>{' '}
        <br />
        <Button key="book" type="primary" onClick={book}>
          Book this class
        </Button>
      </form>
      {err ? <div style={{ color: 'red' }}>{err}</div> : null}
      {successMsg ? <div style={{ color: 'blue' }}>{successMsg}</div> : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    parentProfile: state.parentReducer.parentProfile,
    bookings: state.parentReducer.bookings.bookings,
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(ChildForm);
