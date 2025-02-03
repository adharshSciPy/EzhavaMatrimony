import React from "react";
import "./report.css"

function Report() {
  return (
    <div>
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
    </div>
  );
}

export default Report;  
