import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentSucess.css'; // Import the CSS file

const PaymentSuccess = () => {
    const { profileId } = useParams()
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const paymentIntent = queryParams.get('payment_intent');
    const redirectStatus = queryParams.get('redirect_status');

    useEffect(() => {
        if (redirectStatus === 'succeeded') {
            toast.success('Payment succeeded!');
        } else {
            toast.error('Payment failed or was canceled.');
        }
    }, [redirectStatus]);

    const handleContinueShopping = () => {
        navigate(`/mainuser/${profileId}`);
    };

    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <h1 className="payment-success-title">Payment Successful!</h1>
                <p className="payment-success-message">
                    Thank you for your purchase. Your payment was successful.
                </p>
                <div className="payment-details">
                    <p><strong>Payment Intent ID:</strong> {paymentIntent}</p>
                    <p><strong>Status:</strong> {redirectStatus}</p>
                </div>
                <button className="continue-shopping-button" onClick={handleContinueShopping}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;