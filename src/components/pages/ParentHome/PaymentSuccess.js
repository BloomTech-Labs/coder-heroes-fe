import React from 'react';
import { useHistory } from 'react-router-dom';

export default function PaymentSuccess() {
  const history = useHistory();
  const goToHome = () => {
    history.push('/parent');
  };

  const goToBookings = () => {
    history.push('/parent-booking');
  };

  return (
    <div>
      <h2>Payment Successful!</h2>
      <div>Thank you, your payment was successful!</div>
      <div>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToBookings}>See your bookings</button>
      </div>
    </div>
  );
}
