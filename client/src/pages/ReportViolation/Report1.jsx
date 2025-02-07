import React, { useState, useEffect } from "react";
import "./report1.css";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Report1() {

  const [abuseCategory, setAbuseCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [complaintAgainstId, setComplaintAgainstId] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  console.log("hellochimp",userId);
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      abuseCategory,
      subject,
      complaintDetails,
      complaintAgainstId,
    };

    try {
      const response = await axios.post(`http://localhost:8000/api/v1/user/userReport/${userId}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        setSubmissionStatus("success");
        console.log("Report submitted successfully!");
      } else {
        setSubmissionStatus("error");
        console.error("Failed to submit report.");
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error submitting report:", error);
    }
  };


  const handleReset = () => {
    setAbuseCategory("");
    setSubject("");
    setComplaintDetails("");
    setComplaintAgainstId("");
    setSubmissionStatus(null);
  };


  useEffect(() => {
    if (submissionStatus === "success") {
      alert("Report submitted successfully!");
    } else if (submissionStatus === "error") {
      alert("Failed to submit report. Please try again.");
    }
  }, [submissionStatus]);

  return (
    <div>
      <Nav />
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
            <label htmlFor="abuse-category">Abuse Category</label>
            <select
              id="abuse-category"
              name="abuseCategory"
              value={abuseCategory}
              onChange={(e) => setAbuseCategory(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            value={complaintDetails}
            onChange={(e) => setComplaintDetails(e.target.value)}
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
            value={complaintAgainstId}
            onChange={(e) => setComplaintAgainstId(e.target.value)}
            required
          ></textarea>
          <div className="btncontainer">
            <button type="submit" className="submitButton">
              Submit
            </button>
            <button
              type="reset"
              className="submitButton"
              onClick={handleReset}
            >
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