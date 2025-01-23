import React from "react";
import styles from "./formpage1.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import image2 from "../../assets/heartshape.png";

function FormPage1() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>20%</div>
      </div>
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
            {/* <div className={styles.pulsatingDiv}>
             <div className={styles.heartDiv}>
            <img src={image2} alt="heart"  className={styles.image2}/>
          </div>
          </div> */}
          </div>

          {/* Form Section */}
          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>
              Tell us about your friend's basic details
            </h3>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Date Of Birth</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="date"
                      className={styles.input}
                      placeholder="DD / MM / YY"
                      style={{ color: "#666" }}
                      required
                    />
                  </div>
                  <div className={styles.helperTextDiv}>
                    <p className={styles.helperText}>
                      Your friend's date of birth to find a perfect match
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Gender</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                    <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                      {/* <option>Other</option> */}
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Mother Tongue</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                    <option value="">Select Language</option>
                      <option value="Malayalam">Malayalam</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Email ID</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className={styles.helperTextDiv}>
                    <p className={styles.helperText}>
                      Check your email for a perfect match
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Password</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="password"
                      className={styles.input}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className={styles.helperTextDiv}>
                    <p className={styles.helperText}>
                      Password must have between 6–20 characters
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <button type="submit" className={styles.submitButton}>
                  Continue
                </button>
              </div>
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

export default FormPage1;
