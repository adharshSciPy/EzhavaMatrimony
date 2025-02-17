import React, { useState, useEffect } from "react";
import "./report1.css";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Report1() {
  const [formData, setFormData] = useState({
    subject: "",
    complaint: "",
    abuseCategory: "",
    complainstAgainst: "",
  });
  const notifySuccess = (message) => toast.success(message);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { userId } = useParams();
  console.log("hellochimp", userId);
  console.log("user", userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await axios.patch(
        `http://localhost:8000/api/v1/user/userReport/${userId}`,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Profile Reported Successfully");

        setFormData({
          subject: "",
          complaint: "",
          abuseCategory: "",
          complainstAgainst: "",
          
        });
      } else {
        console.error("Failed to submit report.");
      }
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  return (
    <div>
      <Nav />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <div className="firstheader">
        <h1>Report Violation</h1>
      </div>
      <div className="firstTextContainer">
        <p>
          We work with cyber police to take into custody people who misuse our
          services. We need your support and co-operation to stop violation. You
          can reach out to us at +91-9962043543 (8am to 8pm) or by sending an
          email to reportabuse@ukezhavamatrimony.com, and we will take necessary
          action. Also, while reporting such complaints, please provide all
          evidence including any e-mail (Full header of the e-mail) you may have
          received.
        </p>
        <h2>Note: We will not disclose your identity to the miscreant</h2>
      </div>
      <div className="ViolationHeader">
        <h1>Some examples of violation:</h1>
        <div className="ViolationList">
          <ul>
            <li>If a member sends you a obscene or inappropriate e-mails.</li>
            <li>
              If you suspect a member's profile to be obscene or fraudulent.
            </li>
            <li>If a member is sending you harrassing e-mails.</li>
            <li>if you suspect a member's photograph is not real.</li>
            <li>
              If you notice any other Business/Individual trying to solicit you
              with ads or other material.
            </li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        
        <div className="form-container5">
          <div>
            <label>Abuse Category</label>
            <select
              id="abuse-category"
              name="abuseCategory"
              value={formData.abuseCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="spam">Spam</option>
              <option value="harassment">Verbal Abuse</option>
              <option value="inappropriate">Financial Abuse</option>
              <option value="inappropriate">Emotional Abuse</option>
              <option value="inappropriate">Online Harassment</option>
              <option value="inappropriate">Stalking</option>
              <option value="inappropriate">Threatening Behavior</option>
              <option value="inappropriate">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-container5_1">
          <label htmlFor="complaint-details">Complaint and Details</label>
          <textarea
            id="complaint-details"
            name="complaint"
            rows="4"
            placeholder="Enter complaint details"
            value={formData.complaint}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-container5_2">
          <label htmlFor="complaint-against-id">
            Complaint against ID/User name
          </label>
          <textarea
            id="complaint-details"
            name="complainstAgainst"
            rows="4"
            placeholder="Enter User name"
            value={formData.complainstAgainst}
            onChange={handleChange}
            required
          ></textarea>
          <div className="btncontainer">
            <button type="submit" className="submitButton">
              Submit
            </button>
            <button type="reset" className="submitButton">
              Reset
            </button>
          </div>
        </div>
      </form>
      <hr className="divider" />
      <Footer />
    </div>
  );
}

export default Report1;
