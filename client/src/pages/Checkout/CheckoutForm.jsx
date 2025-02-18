import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckoutForm.css'
const CheckoutForm = ({ userId, profileId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  console.log("ninta", userId, profileId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success/${profileId}`,
      },
      datapusher: datapusher()
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Payment successful!");

    }

    setIsLoading(false);
  };

  const datapusher = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/user/updateUserAccess/${userId}/${profileId}`)
      console.log(response);

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="checkout-main-container">
      <form onSubmit={handleSubmit} className='checkout-main-container-form' >
        <PaymentElement />
        <div className="button-container-checkout">
          <button disabled={isLoading || !stripe || !elements} className='checkout-main-container-button'>
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

const CheckoutWrapper = ({ userId, profileId, stripePromise }) => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent when component mounts
    axios.post(`http://localhost:8000/api/v1/user/create-payment-intent/${userId}/${profileId}`)
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to create payment intent.');
      });
  }, [userId, profileId]);

  // Only render the Elements when clientSecret is available
  if (!clientSecret) {
    return <div>Loading...</div>; // Handle case where clientSecret is not set yet
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm userId={userId} profileId={profileId} />
      <ToastContainer />
    </Elements>
  );
};

export default CheckoutWrapper;