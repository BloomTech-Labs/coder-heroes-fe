import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekKey =
    'pk_test_51KW2lbBKjoE9XTUg0egVFw0BOv1qLHRAalJAI0tzcCrPQZiuT33aJjmlKJkDp0FrfvbcY6JR2Pl7I2tSukYUyQTk00OSmOo3M2';

  const onToken = token => {
    // axios.post(`/payments/payments`,{ amount: priceForStripe, token })
    Promise.resolve({ data: [], message: '' })
      .then(response => {
        alert(
          'Payment successful ,you will receive a receipt in your email',
          response.data
        );
      })
      .catch(error => {
        console.log('payment error:', error.message);
        alert(
          'There was a issue with your payment.Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      className="stripe-modal"
      label="Pay Now"
      name="CodeHeros"
      billingAddress
      description={`your total is $${price}`}
      locale="auto"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekKey}
    />
  );
};

export default StripeCheckoutButton;
