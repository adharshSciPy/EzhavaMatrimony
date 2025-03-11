import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutWrapper from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY);

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

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutWrapper userId={userId} profileId={profileId} />
    </Elements>
  );
};

export default Checkout;
