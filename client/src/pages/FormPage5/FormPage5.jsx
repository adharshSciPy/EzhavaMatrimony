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
                    <label>State</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                      <option value="">Select Your State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Delhi">Delhi</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>City</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="City"
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
