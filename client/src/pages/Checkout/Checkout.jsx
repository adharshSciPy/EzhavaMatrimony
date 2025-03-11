import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutWrapper from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';

// Ensure the key is loaded correctly
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY || "");
console.log(stripePromise,"this");


const Checkout = () => {
  const { profileId, userId } = useParams();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios
      .post(`${baseUrl}:8000/api/v1/user/create-payment-intent/${userId}/${profileId}`)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userId, profileId]);

  return (
    stripePromise && clientSecret ? (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutWrapper userId={userId} profileId={profileId} />
      </Elements>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default Checkout;
