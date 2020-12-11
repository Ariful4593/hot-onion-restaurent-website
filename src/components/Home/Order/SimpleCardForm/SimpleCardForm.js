import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({cardData}) => {
  
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, seterrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      seterrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      setSuccessMessage(paymentMethod.id);
      seterrorMessage(null);
      cardData(paymentMethod)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br/>
        <button type="submit" className="btn btn-danger" disabled={!stripe}>
          Order Place
      </button>
      </form>
      {
        errorMessage && <p className="text-danger">{errorMessage}</p>
      }
      {
        successMessage && <p style={{color: 'green'}}>Your payment was successfull!</p>
      }
    </div>
  );
};
export default SimpleCardForm;