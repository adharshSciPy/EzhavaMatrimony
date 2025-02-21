import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentSucess.css"; // Import the CSS file
import axios from "axios";
import { PDFDocument, rgb } from "pdf-lib";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const paymentIntent = queryParams.get("payment_intent");
  const redirectStatus = queryParams.get("redirect_status");
  const { profileId } = useParams();
  const userId = queryParams.get("userId");
  console.log("id", userId, profileId);

  useEffect(() => {
    if (redirectStatus === "succeeded") {
      toast.success("Payment succeeded!");
      datapusher();
    } else {
      toast.error("Payment failed or was canceled.");
    }
  }, [redirectStatus]);

  const handleContinueShopping = () => {
    navigate(`/mainuser/${profileId}`, { replace: true });
  };
  const datapusher = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/updateUserAccess/${userId}/${profileId}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const generateInvoice = async () => {
    try {
      // Fetch user details
      const userResponse = await axios.get(
        `http://localhost:8000/api/v1/user/usercarddetails/${userId}`
      );
      console.log('hheheuhiue',userResponse.data.data);
      
      const profileResponse = await axios.get(
        `http://localhost:8000/api/v1/user/usercarddetails/${profileId}`
      );

      const userName = userResponse.data.data.firstName || "User";
      const otherUserName = profileResponse.data.data.firstName || "Other User";
      const amount = "100 Pounds"; // Static amount

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);

      // Define styles
      const fontSize = 14;
      const titleSize = 20;
      const lineHeight = 30;
      let yPos = 350; // Starting Y position

      // Add title
      page.drawText("Payment Invoice", {
        x: 50,
        y: yPos,
        size: titleSize,
        color: rgb(0, 0, 0),
      });
      yPos -= lineHeight;

      // Add payment details
      page.drawText(`Account Holder: ${userName}`, {
        x: 50,
        y: yPos,
        size: fontSize,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPos -= lineHeight;
      page.drawText(`Unlocked User: ${otherUserName}`, {
        x: 50,
        y: yPos,
        size: fontSize,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPos -= lineHeight;
      page.drawText(`Transaction ID: ${paymentIntent}`, {
        x: 50,
        y: yPos,
        size: fontSize,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPos -= lineHeight;
      page.drawText(`Amount: ${amount}`, {
        x: 50,
        y: yPos,
        size: fontSize,
        color: rgb(0.2, 0.2, 0.2),
      });
      yPos -= lineHeight;
      page.drawText(`Status: Payment Succeeded`, {
        x: 50,
        y: yPos,
        size: fontSize,
        color: rgb(0, 0.5, 0),
      });

      // Serialize the PDFDocument to bytes (Uint8Array)
      const pdfBytes = await pdfDoc.save();

      // Create a Blob and trigger download
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `invoice_${paymentIntent}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating invoice:", error);
      toast.error("Failed to generate invoice");
    }
  };

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <h1 className="payment-success-title">Payment Successful!</h1>
        <p className="payment-success-message">
          Thank you for your purchase. Your payment was successful.
        </p>
        <div className="payment-details">
          <p>
            <strong>Payment Intent ID:</strong> {paymentIntent}
          </p>
          <p>
            <strong>Status:</strong> {redirectStatus}
          </p>
        </div>
        <button
          className="continue-shopping-button"
          onClick={handleContinueShopping}
        >
          Continue
        </button>
      </div>
      <button onClick={generateInvoice}>Download Invoice</button>
    </div>
  );
};

export default PaymentSuccess;
