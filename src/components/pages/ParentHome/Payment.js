import React from 'react';
import { connect } from 'react-redux';

function Payment(props) {
  const { cart } = props;
  const total = cart.reduce((prev, curr) => prev + curr.price, 0);

  console.log(cart);

  return <div>payment</div>;
}

const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps)(Payment);
