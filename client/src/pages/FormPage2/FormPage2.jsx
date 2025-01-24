import React, { useState } from "react";
import styles from "../FormPage1/formpage1.module.css";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

// import image2 from "../../assets/heartshape.png";

function FormPage2() {
  const [selected, setSelected] = useState("");
  const [selectedJathakam, setSelectedJathakam] = useState("");
  const btnSelected = (button) => {
    setSelected(button);
    console.log("hhaiii", button);
  };
  const btnSelectedJathakam = (button) => {
    setSelectedJathakam(button);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressDiv}>
        <div className={styles.progressHeading}>You have completed</div>
        <div className={styles.progressHeading2}>40%</div>
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
          </div>

          {/* Form Section */}
          <div className={styles.formContainer}>
            <h3 className={styles.formHeading}>
              Fill up your religious details for Finding Right Match
            </h3>

            <form className={styles.form}>
              {/* <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Date Of Birth</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="date"
                      className={styles.input}
                      placeholder="DD / MM / YY"
                      style={{ color: "#666" }}
                    />
                  </div>
                  <div className={styles.helperTextDiv}>
                    <p className={styles.helperText}>
                      Your friend's date of birth to find a perfect match
                    </p>
                  </div>
                </div>
              </div> */}

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Religion</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                      <option value="">Select Religion</option>
                      <option value="Hindu">Hindu</option>

                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Caste</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                      {/* <option value=""></option> */}
                      <option value="Ezhava">Ezhava</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>SubCaste</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                      <option value="">Select SubCaste</option>
                      <option value="Thiyya">Thiyya</option>
                      <option value="Chekavars">Chekavars</option>
                      <option value="Vilaakkithala Nairs">
                        Vilaakkithala Nairs
                      </option>
                      <option value="Velar">Velar</option>
                      <option value="Kalari Panickers">Kalari Panickers</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}></div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Gothram</label>
                    <p className={styles.starHead}>*</p>
                  </div>
                  <div className={styles.inputGroup}>
                    <select className={styles.input} required>
                      <option value="">Gothram</option>
                      <option value="Kashyapa">Kashyapa</option>
                      <option value="Vishwamitra">Vishwamitra</option>
                      <option value="Agastya">Agastya</option>
                    </select>
                  </div>
                  <div className={styles.helperTextDiv}>
                    <div className={styles.optionalDiv}>
                      <p className={styles.optionalDivText}>Optional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Suddha Jathakam</label>
                  </div>
                  <div className={styles.inputGroup}>
                    {/* <input
                      type="email"
                      className={styles.input}
                      placeholder="Enter email"
                    /> */}
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selectedJathakam === "Yes" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelectedJathakam("Yes");
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selectedJathakam === "No" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelectedJathakam("No");
                        }}
                      >
                        No
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selectedJathakam === "Don't Know"
                            ? styles.selected
                            : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelectedJathakam("Don't Know");
                        }}
                      >
                        Don't Know
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}>
                    <div className={styles.optionalDiv}>
                      <p className={styles.optionalDivText}>Optional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fieldGroup}>
                  <div className={styles.labelGroup}>
                    <label>Dosham</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.optionButtonOuterDiv}>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "Yes" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("Yes");
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "No" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("No");
                        }}
                      >
                        No
                      </button>
                      <button
                        className={`${styles.optionSingleButton} ${
                          selected === "Don't Know" ? styles.selected : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          btnSelected("Don't Know");
                        }}
                      >
                        Don't Know
                      </button>
                    </div>
                  </div>
                  <div className={styles.helperTextDiv}>
                    <div className={styles.optionalDiv}>
                      <p className={styles.optionalDivText}>Optional</p>
                    </div>
                  </div>
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

export default FormPage2;
