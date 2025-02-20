import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentSucess.css'; // Import the CSS file
import axios  from 'axios';

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const paymentIntent = queryParams.get('payment_intent');
    const redirectStatus = queryParams.get('redirect_status');
    const { profileId} = useParams()
    const userId = queryParams.get("userId");
    console.log("id" ,userId,profileId);
    
    

    
    useEffect(() => {
        if (redirectStatus === 'succeeded') {
            toast.success('Payment succeeded! thidssss');
            datapusher()
        } else {
            toast.error('Payment failed or was canceled.');
        }
    }, [redirectStatus]);

    const handleContinueShopping = () => {
        navigate(`/mainuser/${profileId}`,{ replace: true });
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