import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutWrapper from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';

// Ensure the key is loaded correctly
const stripePromise = loadStripe(pk_live_51QrI1EDwmH1bsjVeetTsbHXP0sck6KzS37v8kW9wjHAo1pw5dH9N7JM14R3vBYvFhoPQYinPBkJXKHCfbqkVaqss00UqSf6J9S);
console.log(stripePromise,"this");



const Checkout = () => {
  const { profileId, userId } = useParams();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch clientSecret from backend
    axios
      .post(`${baseUrl}:8000/api/v1/user/create-payment-intent/${userId}/${profileId}`)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error("Error fetching clientSecret:", err);
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
