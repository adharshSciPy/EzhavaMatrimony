import React, { useState } from "react";
import styles from "../FormPage3/formpage3.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

function FormPage5() {
 
  const [employ, setEmploy] = useState("");
 
  const [residentStatus, setResidentStatus] = useState("");


  //   const btnSelectedJathakam = (button) => {
  //     setSelectedJathakam(button);
  //   };
  const employStatus = (button) => {
    setEmploy(button);
  };
  const resident = (button) => {
    setResidentStatus(button);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {/* Progress Bar */}

        {/* Main Content */}
        <div className={styles.contentDiv}>
          {/* Image Section */}

          <div className={styles.imageDisplayDiv}>
            <img
              src={image} // Replace with actual image URL
              alt="Couple"
              className={styles.image}
            />
          </div>

          {/* Form Section */}

          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>
              Tell us about your friends personal details
            </h3>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Highest Education</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Education"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Education in Detail</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Education in Details"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Employed in</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroupButtons}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "Government" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("Government");
                        }}
                      >
                        Government
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "Private" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("Private");
                        }}
                      >
                        Private
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "Business" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("Business");
                        }}
                      >
                        Business
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "Defence" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("Defence");
                        }}
                      >
                        Defence
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "SelfEmployed" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("SelfEmployed");
                        }}
                      >
                        SelfEmployed
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          employ === "NotWorking" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          employStatus("NotWorking");
                        }}
                      >
                        NotWorking
                      </button>
                    </div>
                  </div>
                  {/* <div className={styles.helperTextDiv}></div> */}
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Annual Income</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Your Income"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Occupation</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Occupation"
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Citizenship</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder=""
                    />
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Resident Status</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          residentStatus === "Permanent Resident" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                         resident("Permanent Resident");
                        }}
                      >
                        Permanent Resident
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          residentStatus === "Work Permit"
                            ? styles.selected
                            : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          resident("Work Permit");
                        }}
                      >
                        Work Permit
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          residentStatus === "Student Visa"
                            ? styles.selected
                            : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          resident("Student Visa");
                        }}
                      >
                        Student Visa
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          residentStatus === "Temporary Visa"
                            ? styles.selected
                            : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          resident("Temporary Visa");
                        }}
                      >
                        Temporary Visa
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.btnDiv}>
                <button type="submit" className={styles.submitButton}>
                  Continue
                </button>
              </div>
              <div className={styles.mandatoryField}>* Mandatory fields</div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>Copyright © 2025. All rights reserved</p>
      </div>
    </div>
  );
}

export default FormPage5;
