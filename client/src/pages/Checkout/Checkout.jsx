import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutWrapper from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';

// Ensure the key is loaded correctly
const stripePromise = loadStripe("pk_live_51QrI1EDwmH1bsjVeetTsbHXP0sck6KzS37v8kW9wjHAo1pw5dH9N7JM14R3vBYvFhoPQYinPBkJXKHCfbqkVaqss00UqSf6J9S");
console.log(stripePromise,"this");



const Checkout = () => {
  const { profileId, userId } = useParams(); 
return (
  <Elements stripe={stripePromise}>
    <CheckoutWrapper userId={userId} profileId={profileId} stripePromise={stripePromise}/>
  </Elements>
);
};

export default Checkout;
