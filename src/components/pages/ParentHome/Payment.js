import React from 'react';
// import { connect } from 'react-redux';

const dummy = [
  { parent_id: 1, child_id: 1, session_id: 1, price: 1000 },
  { parent_id: 1, child_id: 1, session_id: 25, price: 1050 },
  { parent_id: 1, child_id: 2, session_id: 45, price: 900 },
  { parent_id: 1, child_id: 3, session_id: 17, price: 1200 },
];

export default function Payment(props) {
  // const { cart } = props;
  const cart = dummy;
  const total = cart.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <div>
      <div>TOTAL: ${total}</div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     cart: state.parentReducer.cart,
//   };
// };

// export default connect(mapStateToProps)(Payment);
