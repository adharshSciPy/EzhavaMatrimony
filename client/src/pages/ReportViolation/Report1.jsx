import React from "react";
import "./report1.css"
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";

function Report1() {
  return (
    <div>
      <Nav/>
      <div className="firstheader">
        <h1>Report Violation</h1>
      </div>
      <div className="firstTextContainer">
        <p>
          We work with cyber police to take into custody people who misuse our
          services. We need your support and co-operation to stop violation. You
          can reach out to us at +91-9962043543 (8am to 8pm) or by sending an
          email to reportabuse@ukezhavamatrimony.com, and we will take necessary
          action. Also, while reporting such complaints, please provide all
          evidence including any e-mail (Full header of the e-mail) you may have
          received.
        </p>
        <h2>
            Note: We will not disclose your identity to the miscreant
        </h2>
      </div>    
      <div className="ViolationHeader">
        <h1>Some examples of violation:</h1>
        <div className="ViolationList">
            <ul>
                <li>If a member sends you a obscene or inappropriate e-mails.</li>
                <li>If you suspect a member's profile to be obscene or fraudulent.</li>
                <li>If a member is  sending you harrassing e-mails.</li>
                <li>if you suspect a member's photograph is not real.</li>
                <li>If you notice any other Business/Individual trying to solicit you with ads or other material.</li>
            </ul>
        </div>
      </div>
    <div className="form-container5">
     
      <div>
        <label htmlFor="abuse-category">Abuse Category</label>
        <select id="abuse-category">
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
        <input id="subject" type="text" placeholder="Enter subject" />
      </div>
   </div>
   <div className="form-container5_1">
        <label htmlFor="complaint-details">Complaint and Details</label>
        <textarea id="complaint-details" rows="4" placeholder="Enter complaint details"></textarea>

        {/* Paste Evidence */}
        <label htmlFor="paste-evidence">Paste Evidence (if any)</label>
        <textarea id="paste-evidence" rows="4" placeholder="Paste any evidence if available"></textarea>
   </div>
   <div className="form-container5_2">
        <label htmlFor="complaint-against-id">Complaint against ID/User name</label>
        <textarea id="complaint-details" rows="4" placeholder="Enter User name"></textarea>
        <div className="btncontainer">
        <button type="submit" className="submitButton">
                          Submit
                        </button>
                        <button type="reset" className="submitButton">
                          Reset
                        </button>
        </div>
    </div>
    <hr className="divider" />
    <Footer/>
      </div>
  );
}

export default Report1;  
