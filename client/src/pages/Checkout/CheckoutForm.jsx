import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ userId, profileId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Create PaymentIntent when component mounts
        axios.post('http://localhost:5000/api/payment/create-payment-intent', { userId, profileId })
            .then((res) => setClientSecret(res.data.clientSecret))
            .catch((err) => console.error(err));
    }, [userId, profileId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // After payment, redirect to this URL
                return_url: "http://localhost:3000/payment-success",
            },
        });

        if (error) {
            toast.error(error.message);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <PaymentElement options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements}>
                    {isLoading ? "Processing..." : "Pay Now"}
                </button>
            </form>
            <ToastContainer />
        </>
    );
};

export default CheckoutForm;
